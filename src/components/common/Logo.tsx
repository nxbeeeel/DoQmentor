'use client';

import { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'medium', showText = true, className = '' }: LogoProps) => {
  const { theme } = useTheme();
  
  // Responsive sizes: Mobile = vertical stack, Desktop = horizontal row
  const sizeConfig = {
    small: { 
      logoMobile: 80,
      logoTablet: 80,
      logoDesktop: 80,
      textMobile: 'text-2xl',
      textTablet: 'text-2xl',
      textDesktop: 'text-3xl',
      spacingMobile: 'gap-0',
      spacingDesktop: 'gap-0.5',
    },
    medium: { 
      logoMobile: 120,
      logoTablet: 120,
      logoDesktop: 140,
      textMobile: 'text-4xl',
      textTablet: 'text-4xl',
      textDesktop: 'text-5xl',
      spacingMobile: 'gap-0',
      spacingDesktop: 'gap-1',
    },
    large: { 
      logoMobile: 180,
      logoTablet: 220,
      logoDesktop: 280,
      textMobile: 'text-6xl',
      textTablet: 'text-7xl',
      textDesktop: 'text-8xl',
      spacingMobile: 'gap-0',
      spacingDesktop: 'gap-1',
    }
  };
  
  const config = sizeConfig[size];
  
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center ${config.spacingMobile} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Image - Responsive */}
      <motion.div 
        className="relative flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Mobile Logo */}
        <Image
          src="/logo.png"
          alt="DoQmentor logo"
          width={config.logoMobile}
          height={config.logoMobile}
          className="object-contain block sm:hidden"
          style={{ 
            filter: theme === 'dark' 
              ? 'brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.3))' 
              : 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))',
          }}
          priority
        />
        
        {/* Tablet Logo */}
        <Image
          src="/logo.png"
          alt="DoQmentor logo"
          width={config.logoTablet}
          height={config.logoTablet}
          className="object-contain hidden sm:block lg:hidden"
          style={{ 
            filter: theme === 'dark' 
              ? 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.3))' 
              : 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
          }}
          priority
        />
        
        {/* Desktop Logo */}
        <Image
          src="/logo.png"
          alt="DoQmentor logo"
          width={config.logoDesktop}
          height={config.logoDesktop}
          className="object-contain hidden lg:block"
          style={{ 
            filter: theme === 'dark' 
              ? 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.3))' 
              : 'drop-shadow(0 2px 10px rgba(0,0,0,0.15))',
          }}
          priority
        />
      </motion.div>
      
      {/* Company Name - Responsive */}
      {showText && (
        <motion.div
          className="flex flex-col items-center justify-center -mt-16 sm:-mt-20 lg:-mt-24"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span 
            className={`${config.textMobile} lg:${config.textDesktop} font-bold leading-none transition-colors duration-500 whitespace-nowrap text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} 
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 800,
              textShadow: theme === 'dark' 
                ? '0 2px 12px rgba(0,0,0,0.4)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em',
            } as CSSProperties}
          >
            DoQmentor
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};
