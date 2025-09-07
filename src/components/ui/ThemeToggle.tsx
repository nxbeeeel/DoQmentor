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
      className="fixed top-6 right-6 z-50 w-14 h-8 rounded-full transition-all duration-500 shadow-lg"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #1e293b, #334155)' 
          : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        border: theme === 'dark' 
          ? '2px solid rgba(255,255,255,0.1)' 
          : '2px solid rgba(0,0,0,0.1)',
        boxShadow: theme === 'dark'
          ? '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 8px 25px rgba(251,191,36,0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #f8fafc, #e2e8f0)' 
            : 'linear-gradient(135deg, #1e293b, #334155)',
          boxShadow: theme === 'dark'
            ? '0 2px 8px rgba(0,0,0,0.2)'
            : '0 2px 8px rgba(0,0,0,0.3)'
        }}
        animate={{ 
          x: theme === 'dark' ? 2 : 22,
          rotate: theme === 'dark' ? 0 : 180 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
          duration: 0.4 
        }}
      >
        {theme === 'dark' ? (
          <Moon 
            className="w-3 h-3 text-slate-700" 
            style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}
          />
        ) : (
          <Sun 
            className="w-3 h-3 text-yellow-100" 
            style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'}}
          />
        )}
      </motion.div>
    </motion.button>
  );
};
