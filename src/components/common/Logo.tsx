'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { COMPANY_INFO } from '@/constants';

export const Logo = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center space-x-3">
      {/* Modern D and Q Logo */}
      <div className="relative">
        <div 
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
              : 'bg-gradient-to-br from-teal-400 to-teal-600'
          }`}
          style={{
            boxShadow: theme === 'dark'
              ? '0 4px 20px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              : '0 4px 20px rgba(20,184,166,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          <span 
            className="text-white font-black text-lg"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            D
          </span>
        </div>
        
        {/* Small Q accent */}
        <div 
          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-200 to-blue-300 text-blue-800' 
              : 'bg-gradient-to-br from-teal-200 to-teal-300 text-teal-800'
          }`}
          style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          Q
        </div>
      </div>
      
      {/* Company Name */}
      <span 
        className={`text-2xl font-semibold tracking-wide transition-colors duration-500 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`} 
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 600,
          textShadow: theme === 'dark' 
            ? '0 2px 8px rgba(0,0,0,0.3)' 
            : '0 1px 3px rgba(0,0,0,0.1)',
          letterSpacing: '0.5px'
        }}
      >
        DoQmentor
      </span>
    </div>
  );
};
