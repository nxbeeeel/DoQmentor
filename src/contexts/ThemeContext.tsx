'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // COMPLETELY OVERRIDE SYSTEM THEME - FORCE MANUAL CONTROL
    const savedTheme = localStorage.getItem('doqmentor-theme') as Theme || 'dark';
    setTheme(savedTheme);
    
    // Force theme attributes with maximum priority
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.style.setProperty('color-scheme', 'light', 'important');
    document.body.style.setProperty('color-scheme', 'light', 'important');
    
    // Force background colors directly on body to override system
    if (savedTheme === 'dark') {
      document.body.style.setProperty('background', '#1e3a8a', 'important');
    } else {
      document.body.style.setProperty('background', '#87CEEB', 'important');
    }
    
    // Disable all system theme detection
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    // Remove all existing listeners
    darkMediaQuery.removeEventListener('change', () => {});
    lightMediaQuery.removeEventListener('change', () => {});
  }, []);

  useEffect(() => {
    // Save theme preference and apply to document
    localStorage.setItem('doqmentor-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Force immediate application with maximum priority
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.setProperty('color-scheme', 'light', 'important');
    document.body.style.setProperty('color-scheme', 'light', 'important');
    
    // Force background colors directly to override system
    if (newTheme === 'dark') {
      document.body.style.setProperty('background', '#1e3a8a', 'important');
    } else {
      document.body.style.setProperty('background', '#87CEEB', 'important');
    }
    
    localStorage.setItem('doqmentor-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
