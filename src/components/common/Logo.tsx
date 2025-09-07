'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { COMPANY_INFO } from '@/constants';

export const Logo = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      {/* Stylized Q as open book/document */}
      <div className="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          className={`transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          style={{
            filter: theme === 'dark' 
              ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' 
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        >
          <path
            d="M16 4C10.48 4 6 8.48 6 14c0 5.52 4.48 10 10 10 1.18 0 2.32-.21 3.38-.58L24 28l-4.62-4.62C21.79 21.32 22 20.18 22 19c0-5.52-4.48-10-10-10z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M16 6C11.58 6 8 9.58 8 14s3.58 8 8 8c.88 0 1.73-.14 2.52-.4l3.88 3.88 1.41-1.41-3.88-3.88c.26-.79.4-1.64.4-2.52 0-4.42-3.58-8-8-8zm0 2c3.31 0 6 2.69 6 6 0 .69-.12 1.35-.33 1.97L18 12.31V10h-4v6h2.69l-3.66 3.67C11.35 19.12 10.69 19 10 19c-3.31 0-6-2.69-6-6s2.69-6 6-6z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Company Name */}
      <span 
        className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`} 
        style={{
          textShadow: theme === 'dark' 
            ? '0 2px 12px rgba(0,0,0,0.4)' 
            : '0 2px 6px rgba(0,0,0,0.1)', 
          fontFamily: 'Playfair Display, serif'
        }}
      >
        Do<span className={theme === 'dark' ? 'text-blue-200' : 'text-blue-600'}>Q</span>mentor
      </span>
    </div>
  );
};
