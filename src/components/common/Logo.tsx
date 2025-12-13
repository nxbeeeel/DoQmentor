'use client';

import { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'medium', showText = true, className = '' }: LogoProps) => {
  const sizeConfig = {
    small: { logo: 56, text: 'text-xl sm:text-2xl' },
    medium: { logo: 80, text: 'text-2xl sm:text-3xl' },
    large: { logo: 100, text: 'text-3xl sm:text-4xl' },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`flex items-center gap-3 sm:gap-4 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Image
        src="/logo.png"
        alt="DoQmentor logo"
        width={config.logo}
        height={config.logo}
        className="object-contain w-14 sm:w-20 lg:w-24"
        style={{ filter: 'brightness(0) invert(1)' }}
        priority
      />

      {showText && (
        <span
          className={`${config.text} font-semibold text-white tracking-tight`}
          style={{ letterSpacing: '-0.02em' } as CSSProperties}
        >
          DoQmentor
        </span>
      )}
    </motion.div>
  );
};
