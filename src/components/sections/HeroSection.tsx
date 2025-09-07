'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/constants';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Floating geometric element */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
        <motion.div
          className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-royal-blue/5 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 sm:p-6">
        <Logo />
        <Button>Schedule Consultation</Button>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal mb-4 sm:mb-6 text-center leading-tight px-2">
          Empowering Your Vision.
          <br />
          <span className="text-royal-blue">Global Consulting</span>
          <br />
          for a Connected World.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 text-center max-w-3xl leading-relaxed px-4">
          {COMPANY_INFO.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 justify-center items-center">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-royal-blue" />
      </motion.div>
    </section>
  );
};
