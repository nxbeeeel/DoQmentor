'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { COMPANY_INFO } from '@/constants';

export const HeroSection = () => {
  const { theme } = useTheme();
  
  // Theme-dependent styles for better performance
  const backgroundStyle = {
    background: theme === 'dark' ? '#1e3a8a' : '#87CEEB'
  };
  
  const textShadowStyle = theme === 'dark' 
    ? '0 6px 30px rgba(0,0,0,0.6), 0 0 80px rgba(255,255,255,0.15)'
    : '0 4px 20px rgba(0,0,0,0.15)';
  
  return (
    <section 
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-500 ${
        theme === 'dark' ? 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
      }`} 
      style={backgroundStyle}
    >
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

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex justify-center items-center p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto flex justify-center">
          <Logo />
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10 pt-32 lg:pt-40">
        <motion.h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 text-center leading-tight px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 900,
            textShadow: textShadowStyle,
            filter: theme === 'dark' 
              ? 'drop-shadow(0 0 25px rgba(255,255,255,0.4))'
              : 'drop-shadow(0 2px 10px rgba(0,0,0,0.1))',
            letterSpacing: '-0.02em'
          }}
        >
          Empowering Your Vision.
          <br />
          <motion.span 
            className={theme === 'dark' ? 'text-blue-200' : 'text-teal-600'}
            animate={{ 
              textShadow: theme === 'dark' ? [
                '0 0 30px rgba(107,138,255,0.6)',
                '0 0 60px rgba(107,138,255,0.4)',
                '0 0 30px rgba(107,138,255,0.6)'
              ] : [
                '0 0 20px rgba(20,184,166,0.4)',
                '0 0 40px rgba(20,184,166,0.2)',
                '0 0 20px rgba(20,184,166,0.4)'
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
          className={`text-lg sm:text-xl md:text-2xl mb-10 lg:mb-12 text-center max-w-4xl mx-auto leading-relaxed px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500,
            textShadow: theme === 'dark' 
              ? '0 4px 20px rgba(0,0,0,0.5)' 
              : '0 2px 8px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(2px)',
            opacity: 0.95
          }}
        >
          {COMPANY_INFO.description}
        </motion.p>

        <motion.div 
          className="flex justify-center mb-16 lg:mb-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Single Learn More Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                theme === 'dark' ? 'text-royal-blue' : 'text-white'
              }`}
              style={{
                background: theme === 'dark' 
                  ? 'rgba(255,255,255,0.95)' 
                  : 'linear-gradient(135deg, #14b8a6, #0d9488)',
                backdropFilter: 'blur(20px)',
                border: theme === 'dark' 
                  ? '2px solid rgba(255,255,255,0.4)' 
                  : '2px solid rgba(255,255,255,0.3)',
                boxShadow: theme === 'dark'
                  ? '0 12px 40px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.5)'
                  : '0 12px 40px rgba(20,184,166,0.3), inset 0 2px 0 rgba(255,255,255,0.3)',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.5px'
              }}
            >
              Explore Our Services
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" style={{filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'}} />
      </motion.div>
    </section>
  );
};
