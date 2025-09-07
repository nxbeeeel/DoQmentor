'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/constants';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-royal-blue relative overflow-hidden" style={{perspective: '1000px'}}>
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orb with 3D effect */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            borderRadius: '50%',
            boxShadow: '0 20px 60px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.2)',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Secondary floating element */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
            x: [-15, 15, -15]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
            borderRadius: '50%',
            boxShadow: '0 15px 40px rgba(255,255,255,0.08)',
            transform: 'perspective(1000px) rotateX(15deg)'
          }}
        />
        
        {/* Tertiary element with depth */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
          animate={{
            rotate: 360,
            borderRadius: ['50%', '25%', '50%'],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'conic-gradient(from 0deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.06)',
            transform: 'translateZ(20px)'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full`}
            style={{
              background: 'rgba(255,255,255,0.3)',
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              backdropFilter: 'blur(5px)'
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 sm:p-6">
        <Logo />
        <Button 
          onClick={() => window.open('https://calendly.com/doqmentor', '_blank')}
          className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          Schedule Consultation
        </Button>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 text-center leading-tight px-2"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 60px rgba(255,255,255,0.1)',
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
          }}
        >
          Empowering Your Vision.
          <br />
          <motion.span 
            className="text-blue-200"
            animate={{ 
              textShadow: [
                '0 0 30px rgba(255,255,255,0.6)',
                '0 0 60px rgba(255,255,255,0.4)',
                '0 0 30px rgba(255,255,255,0.6)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Global Consulting
          </motion.span>
          <br />
          for a Connected World.
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 text-center max-w-3xl leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            textShadow: '0 2px 15px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(2px)'
          }}
        >
          {COMPANY_INFO.description}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Primary Learn More Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg font-semibold text-royal-blue rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)'
              }}
            >
              Learn More
            </button>
          </motion.div>
          
          {/* Secondary Schedule Consultation Button */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={() => window.open('https://calendly.com/doqmentor', '_blank')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal-blue px-6 py-3 text-sm font-medium"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
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
