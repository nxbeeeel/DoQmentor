'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageSquare, Send, Star } from 'lucide-react';
import type { Review } from '@/types';

interface CustomerReviewSectionProps {
  initialReviews?: Review[];
}

const reviewDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const CustomerReviewSection = ({
  initialReviews = [],
}: CustomerReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [formData, setFormData] = useState({ name: '', review: '' });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(initialReviews.length === 0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Unable to load reviews right now.');
        }

        const data = (await response.json()) as Review[];
        if (isMounted) {
          setReviews(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching reviews:', error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim() || rating === 0) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          rating,
          review: formData.review.trim(),
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to save your review right now.');
      }

      setReviews((currentReviews) => [payload as Review, ...currentReviews]);
      setFormData({ name: '', review: '' });
      setRating(0);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to save your review right now.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="relative bg-surface-950 px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="section-glow opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="badge mb-4 sm:mb-6">Community</span>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
            <span className="text-white">Share your </span>
            <span className="text-gradient-accent">experience</span>
          </h2>
          <p className="mx-auto max-w-xl px-4 text-base text-surface-400 sm:text-lg">
            Real client feedback builds trust. Tell future customers how your
            experience with DoQmentor went.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card p-5 sm:p-6 md:p-8">
              <h3 className="mb-5 flex items-center gap-3 text-lg font-medium text-white sm:mb-6 sm:text-xl">
                <MessageSquare className="h-5 w-5 text-accent-light" />
                Write a Review
              </h3>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center sm:py-12"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 sm:h-14 sm:w-14">
                      <svg
                        className="h-5 w-5 text-green-400 sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-white sm:text-lg">
                      Thank you for your review!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-surface-300 sm:mb-3">
                        Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-110"
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            <Star
                              className={`h-6 w-6 transition-colors sm:h-7 sm:w-7 ${
                                star <= (hoverRating || rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-surface-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-surface-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="input"
                        placeholder="John Doe"
                        minLength={2}
                        maxLength={80}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-surface-300">
                        Your Review
                      </label>
                      <textarea
                        value={formData.review}
                        onChange={(e) =>
                          setFormData({ ...formData, review: e.target.value })
                        }
                        rows={5}
                        className="input resize-none"
                        placeholder="Tell us what service you used and how the experience went."
                        minLength={20}
                        maxLength={1200}
                        required
                      />
                    </div>

                    {errorMessage ? (
                      <p className="text-sm text-rose-300">{errorMessage}</p>
                    ) : (
                      <p className="text-xs text-surface-500 sm:text-sm">
                        Reviews are published directly, so please keep the feedback
                        genuine and specific.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={
                        isSubmitting ||
                        !formData.name.trim() ||
                        !formData.review.trim() ||
                        rating === 0
                      }
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Review
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-medium text-white sm:mb-6 sm:text-xl">
              Customer Reviews
              {reviews.length > 0 ? (
                <span className="ml-2 text-sm font-normal text-surface-500">
                  ({reviews.length})
                </span>
              ) : null}
            </h3>

            <div className="max-h-[400px] space-y-3 overflow-y-auto pr-2 sm:max-h-[500px] sm:space-y-4">
              {isLoading ? (
                <div className="card p-6 text-center sm:p-8">
                  <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
                  <p className="text-sm text-surface-500">Loading reviews...</p>
                </div>
              ) : reviews.length === 0 ? (
                <div className="card p-6 text-center sm:p-8">
                  <MessageSquare className="mx-auto mb-3 h-8 w-8 text-surface-600 sm:h-10 sm:w-10" />
                  <p className="text-sm text-surface-500 sm:text-base">
                    No reviews yet. Be the first to share your experience.
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {reviews.map((review) => (
                    <motion.article
                      key={review.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      className="card p-4 sm:p-5"
                    >
                      <div className="mb-2 flex items-start justify-between sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-xs font-medium text-accent-light sm:h-9 sm:w-9 sm:text-sm">
                            {review.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {review.name}
                            </div>
                            <div className="text-xs text-surface-500">
                              {reviewDateFormatter.format(new Date(review.createdAt))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${
                                index < review.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-surface-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-surface-400 sm:text-sm">
                        {review.review}
                      </p>
                    </motion.article>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};
