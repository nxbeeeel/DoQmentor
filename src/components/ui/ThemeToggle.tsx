'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full transition-all duration-300 sm:p-3"
      style={{
        background: theme === 'dark' 
          ? 'rgba(255,255,255,0.1)' 
          : 'rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        border: theme === 'dark' 
          ? '1px solid rgba(255,255,255,0.2)' 
          : '1px solid rgba(0,0,0,0.2)',
        boxShadow: theme === 'dark'
          ? '0 4px 16px rgba(0,0,0,0.1)'
          : '0 4px 16px rgba(0,0,0,0.2)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun 
            className="w-4 h-4 sm:w-5 sm:h-5 text-white" 
            style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}
          />
        ) : (
          <Moon 
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" 
            style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'}}
          />
        )}
      </motion.div>
    </motion.button>
  );
};
