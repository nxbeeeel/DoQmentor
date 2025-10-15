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
  
  const sizeConfig = {
    small: { 
      logo: 60, 
      text: 'text-2xl', 
      spacing: 'gap-0.5',
      containerHeight: 'h-14'
    },
    medium: { 
      logo: 100, 
      text: 'text-4xl', 
      spacing: 'gap-1',
      containerHeight: 'h-20'
    },
    large: { 
      logo: 160, 
      text: 'text-6xl', 
      spacing: 'gap-1',
      containerHeight: 'h-28'
    }
  };
  
  const config = sizeConfig[size];
  
  return (
    <motion.div 
      className={`flex items-center justify-center ${config.spacing} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Image */}
      <motion.div 
        className={`relative flex items-center justify-center ${config.containerHeight}`}
        style={{ width: config.logo, height: config.logo }}
        whileHover={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src="/logo.png"
          alt="DoQmentor logo"
          width={config.logo}
          height={config.logo}
          className="object-contain"
          style={{ 
            filter: theme === 'dark' 
              ? 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.3))' 
              : 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
          }}
          priority
        />
      </motion.div>
      
      {/* Company Name */}
      {showText && (
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span 
            className={`${config.text} font-bold leading-none transition-colors duration-500 ${
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
