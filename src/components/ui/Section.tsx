'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  variant?: 'white' | 'gray';
  id?: string;
}

export const Section = ({ children, className = '', background = 'white', variant, id }: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  // Use variant if provided, otherwise fallback to background
  const bgColor = variant || background;

  return (
    <section id={id} className={`py-20 px-6 ${bgClasses[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
