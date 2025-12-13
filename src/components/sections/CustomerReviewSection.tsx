'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Send, MessageSquare } from 'lucide-react';

interface Review {
    id: string;
    name: string;
    rating: number;
    review: string;
    date: string;
}

export const CustomerReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [formData, setFormData] = useState({ name: '', review: '' });
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const savedReviews = localStorage.getItem('doqmentor_reviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    const saveReviews = (newReviews: Review[]) => {
        localStorage.setItem('doqmentor_reviews', JSON.stringify(newReviews));
        setReviews(newReviews);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.review.trim() || rating === 0) return;

        setIsSubmitting(true);

        setTimeout(() => {
            const newReview: Review = {
                id: Date.now().toString(),
                name: formData.name.trim(),
                rating,
                review: formData.review.trim(),
                date: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }),
            };

            saveReviews([newReview, ...reviews]);
            setFormData({ name: '', review: '' });
            setRating(0);
            setIsSubmitting(false);
            setShowSuccess(true);

            setTimeout(() => setShowSuccess(false), 3000);
        }, 500);
    };

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950">
            <div className="section-glow opacity-40" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="badge mb-4 sm:mb-6">Community</span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
                        <span className="text-white">Share your </span>
                        <span className="text-gradient-accent">experience</span>
                    </h2>
                    <p className="text-base sm:text-lg text-surface-400 max-w-xl mx-auto px-4">
                        Your feedback helps us improve and helps others make informed decisions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Review Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="card p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl font-medium text-white mb-5 sm:mb-6 flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-accent-light" />
                                Write a Review
                            </h3>

                            <AnimatePresence mode="wait">
                                {showSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="py-10 sm:py-12 text-center"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-base sm:text-lg font-medium text-white">Thank you for your review!</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4 sm:space-y-5"
                                    >
                                        {/* Rating */}
                                        <div>
                                            <label className="block text-sm font-medium text-surface-300 mb-2 sm:mb-3">
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
                                                            className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors ${star <= (hoverRating || rating)
                                                                    ? 'text-amber-400 fill-amber-400'
                                                                    : 'text-surface-600'
                                                                }`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-surface-300 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="input"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        {/* Review */}
                                        <div>
                                            <label className="block text-sm font-medium text-surface-300 mb-2">
                                                Your Review
                                            </label>
                                            <textarea
                                                value={formData.review}
                                                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                                rows={4}
                                                className="input resize-none"
                                                placeholder="Share your experience..."
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !formData.name.trim() || !formData.review.trim() || rating === 0}
                                            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Submit Review
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Reviews List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg sm:text-xl font-medium text-white mb-4 sm:mb-6">
                            Customer Reviews
                            {reviews.length > 0 && (
                                <span className="text-sm font-normal text-surface-500 ml-2">
                                    ({reviews.length})
                                </span>
                            )}
                        </h3>

                        <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
                            {reviews.length === 0 ? (
                                <div className="card p-6 sm:p-8 text-center">
                                    <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-surface-600 mx-auto mb-3" />
                                    <p className="text-sm sm:text-base text-surface-500">
                                        No reviews yet. Be the first to share your experience!
                                    </p>
                                </div>
                            ) : (
                                reviews.map((review) => (
                                    <motion.div
                                        key={review.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="card p-4 sm:p-5"
                                    >
                                        <div className="flex items-start justify-between mb-2 sm:mb-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/20 flex items-center justify-center text-xs sm:text-sm font-medium text-accent-light">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white text-sm">
                                                        {review.name}
                                                    </div>
                                                    <div className="text-xs text-surface-500">
                                                        {review.date}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < review.rating
                                                                ? 'text-amber-400 fill-amber-400'
                                                                : 'text-surface-700'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-xs sm:text-sm text-surface-400 leading-relaxed">
                                            {review.review}
                                        </p>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 divider" />
        </section>
    );
};
