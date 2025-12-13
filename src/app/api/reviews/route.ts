import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Review {
    id: string;
    name: string;
    rating: number;
    review: string;
    date: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'reviews.json');

// Ensure data directory and file exist
async function ensureDataFile(): Promise<Review[]> {
    try {
        const dataDir = path.dirname(DATA_FILE);
        await fs.mkdir(dataDir, { recursive: true });

        try {
            const data = await fs.readFile(DATA_FILE, 'utf-8');
            return JSON.parse(data);
        } catch {
            // File doesn't exist, create it
            await fs.writeFile(DATA_FILE, '[]', 'utf-8');
            return [];
        }
    } catch (error) {
        console.error('Error ensuring data file:', error);
        return [];
    }
}

// GET - Fetch all reviews
export async function GET() {
    try {
        const reviews = await ensureDataFile();
        return NextResponse.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

// POST - Add a new review
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, rating, review } = body;

        if (!name || !rating || !review) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const reviews = await ensureDataFile();

        const newReview: Review = {
            id: Date.now().toString(),
            name: name.trim(),
            rating: Number(rating),
            review: review.trim(),
            date: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
        };

        reviews.unshift(newReview);
        await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), 'utf-8');

        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error('Error creating review:', error);
        return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
    }
}

// DELETE - Remove a review by ID
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Missing review ID' }, { status: 400 });
        }

        const reviews = await ensureDataFile();
        const filteredReviews = reviews.filter((r: Review) => r.id !== id);

        if (filteredReviews.length === reviews.length) {
            return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        await fs.writeFile(DATA_FILE, JSON.stringify(filteredReviews, null, 2), 'utf-8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting review:', error);
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}
