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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-royal-blue relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
          What Our <span className="text-blue-200">Clients Say</span>
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto" style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
          Trusted by businesses worldwide for exceptional consultancy services.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 sm:p-8 h-full flex flex-col" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                {TESTIMONIALS[currentIndex].image}
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 flex-grow leading-relaxed">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-blue-200">
                  {TESTIMONIALS[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-royal-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
