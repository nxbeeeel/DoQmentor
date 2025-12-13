'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950">
      <div className="section-glow opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="badge mb-4 sm:mb-6">Testimonials</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            <span className="text-white">What our </span>
            <span className="text-gradient-accent">clients say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="card p-6 sm:p-8 md:p-12"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent/20 mb-4 sm:mb-6" />

            {/* Stars */}
            <div className="flex gap-1 mb-4 sm:mb-6">
              {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-base sm:text-lg md:text-xl text-surface-200 mb-6 sm:mb-8 leading-relaxed">
              "{TESTIMONIALS[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center text-sm sm:text-base text-accent-light font-medium">
                {TESTIMONIALS[currentIndex].image}
              </div>
              <div>
                <div className="font-medium text-white text-sm sm:text-base">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-xs sm:text-sm text-surface-500">
                  {TESTIMONIALS[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation - Mobile Friendly */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-surface-700 flex items-center justify-center hover:bg-surface-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-surface-400" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                      ? 'bg-accent w-6'
                      : 'bg-surface-700 hover:bg-surface-600'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-surface-700 flex items-center justify-center hover:bg-surface-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-surface-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
};
