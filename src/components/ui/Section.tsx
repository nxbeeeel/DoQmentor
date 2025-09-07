'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export const Section = ({ children, className = '', background = 'white' }: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section className={`py-20 px-6 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
