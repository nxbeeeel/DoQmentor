import { neon } from '@neondatabase/serverless';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface ReviewRecord {
  id: string;
  name: string;
  rating: number;
  review: string;
  createdAt: string;
}

export interface CreateReviewInput {
  name: string;
  rating: number;
  review: string;
}

interface ReviewRow {
  id: string;
  name: string;
  rating: number;
  review: string;
  created_at: string | Date;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'reviews.json');
const isProduction = process.env.NODE_ENV === 'production';

let schemaPromise: Promise<void> | null = null;

function getDatabaseUrl() {
  return process.env.DATABASE_URL?.trim();
}

function getReviewAdminToken() {
  return process.env.REVIEW_ADMIN_TOKEN?.trim();
}

function mapReviewRow(row: ReviewRow): ReviewRecord {
  return {
    id: row.id,
    name: row.name,
    rating: Number(row.rating),
    review: row.review,
    createdAt:
      row.created_at instanceof Date
        ? row.created_at.toISOString()
        : new Date(row.created_at).toISOString(),
  };
}

async function ensureDataFile(): Promise<ReviewRecord[]> {
  const dataDir = path.dirname(DATA_FILE);
  await fs.mkdir(dataDir, { recursive: true });

  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data) as ReviewRecord[];
  } catch {
    await fs.writeFile(DATA_FILE, '[]', 'utf-8');
    return [];
  }
}

async function ensureSchema() {
  const databaseUrl = getDatabaseUrl();

  if (!databaseUrl) {
    if (isProduction) {
      throw new Error('DATABASE_URL is not configured for production reviews.');
    }

    return;
  }

  if (!schemaPromise) {
    const sql = neon(databaseUrl);

    schemaPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS customer_reviews (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
          review TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
    })();
  }

  await schemaPromise;
}

function validateReviewInput(input: CreateReviewInput) {
  const name = input.name.trim();
  const review = input.review.trim();
  const rating = Number(input.rating);

  if (!name || !review || !Number.isFinite(rating)) {
    throw new Error('Missing required review fields.');
  }

  if (name.length < 2 || name.length > 80) {
    throw new Error('Name must be between 2 and 80 characters.');
  }

  if (review.length < 20 || review.length > 1200) {
    throw new Error('Review must be between 20 and 1200 characters.');
  }

  if (rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5.');
  }

  return { name, review, rating };
}

export async function listReviews(): Promise<ReviewRecord[]> {
  const databaseUrl = getDatabaseUrl();

  if (databaseUrl) {
    await ensureSchema();
    const sql = neon(databaseUrl);
    const rows = (await sql`
      SELECT id, name, rating, review, created_at
      FROM customer_reviews
      ORDER BY created_at DESC
    `) as ReviewRow[];

    return rows.map(mapReviewRow);
  }

  if (isProduction) {
    return [];
  }

  const reviews = await ensureDataFile();
  return reviews.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export async function createReview(input: CreateReviewInput): Promise<ReviewRecord> {
  const parsed = validateReviewInput(input);
  const databaseUrl = getDatabaseUrl();
  const id = randomUUID();

  if (databaseUrl) {
    await ensureSchema();
    const sql = neon(databaseUrl);
    const [row] = (await sql`
      INSERT INTO customer_reviews (id, name, rating, review)
      VALUES (${id}, ${parsed.name}, ${parsed.rating}, ${parsed.review})
      RETURNING id, name, rating, review, created_at
    `) as ReviewRow[];

    return mapReviewRow(row);
  }

  if (isProduction) {
    throw new Error('Review submissions require DATABASE_URL in production.');
  }

  const reviews = await ensureDataFile();
  const review: ReviewRecord = {
    id,
    name: parsed.name,
    rating: parsed.rating,
    review: parsed.review,
    createdAt: new Date().toISOString(),
  };

  reviews.unshift(review);
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), 'utf-8');

  return review;
}

export async function deleteReview(id: string) {
  const databaseUrl = getDatabaseUrl();

  if (databaseUrl) {
    await ensureSchema();
    const sql = neon(databaseUrl);
    const rows = (await sql`
      DELETE FROM customer_reviews
      WHERE id = ${id}
      RETURNING id
    `) as Array<{ id: string }>;

    return rows.length > 0;
  }

  if (isProduction) {
    throw new Error('Review deletion requires DATABASE_URL in production.');
  }

  const reviews = await ensureDataFile();
  const filtered = reviews.filter((review) => review.id !== id);

  if (filtered.length === reviews.length) {
    return false;
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}

export function isAuthorizedReviewAdmin(authHeader: string | null) {
  const adminToken = getReviewAdminToken();

  if (!adminToken || !authHeader) {
    return false;
  }

  const bearerToken = authHeader.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length).trim()
    : authHeader.trim();

  return bearerToken === adminToken;
}
