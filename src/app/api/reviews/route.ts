import { NextRequest, NextResponse } from 'next/server';
import {
  createReview,
  deleteReview,
  isAuthorizedReviewAdmin,
  listReviews,
} from '@/lib/reviews';

// Disable caching for this API route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET - Fetch all reviews
export async function GET() {
  try {
    const reviews = await listReviews();
    return NextResponse.json(reviews, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}

// POST - Add a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const review = await createReview({
      name: body?.name ?? '',
      rating: body?.rating ?? 0,
      review: body?.review ?? '',
    });

    return NextResponse.json(review, {
      status: 201,
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (error) {
    console.error('Error creating review:', error);

    const message =
      error instanceof Error ? error.message : 'Failed to create review';
    const status =
      /required|between/i.test(message) ? 400 : /DATABASE_URL/i.test(message) ? 503 : 500;

    return NextResponse.json(
      { error: message },
      { status, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}

// DELETE - Remove a review by ID
export async function DELETE(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!isAuthorizedReviewAdmin(authHeader)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing review ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const deleted = await deleteReview(id);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404, headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
