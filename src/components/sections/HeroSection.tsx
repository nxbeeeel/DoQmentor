'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components';
import { COMPANY_INFO } from '@/constants';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-surface-950">
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Top Glow */}
      <div className="section-glow" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Logo - Bigger */}
      <nav className="absolute top-6 sm:top-8 left-0 right-0 z-20 flex justify-center px-4">
        <Logo size="large" />
      </nav>

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <span className="badge text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Trusted by 500+ Businesses Worldwide
          </span>
        </motion.div>

        {/* Headline - Mobile Optimized */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">Empowering Your</span>
          <br />
          <span className="text-gradient-accent">Global Vision</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {COMPANY_INFO.description} From documentation to licensing, we handle the complexity so you can focus on growth.
        </motion.p>

        {/* CTA Buttons - Mobile Stacked */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Stats Row - Mobile Optimized */}
        <motion.div
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: '500+', label: 'Clients' },
            { value: '98%', label: 'Success' },
            { value: '10+', label: 'Years' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-surface-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
};
