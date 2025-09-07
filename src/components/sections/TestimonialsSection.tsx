'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
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
    <Section background="gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
          What Our <span className="text-royal-blue">Clients Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trusted by businesses worldwide for exceptional consultancy services.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                {TESTIMONIALS[currentIndex].image}
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].text}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-charcoal text-lg">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-royal-blue font-medium">
                  {TESTIMONIALS[currentIndex].company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-royal-blue" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-royal-blue" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-royal-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
