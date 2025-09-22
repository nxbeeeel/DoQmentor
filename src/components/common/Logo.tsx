'use client';

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
    small: { svg: 32, text: 'text-lg', spacing: 'space-x-2' },
    medium: { svg: 64, text: 'text-3xl', spacing: 'space-x-4' },
    large: { svg: 80, text: 'text-4xl', spacing: 'space-x-6' }
  };
  
  return (
    <motion.div 
      className={`flex items-center ${sizeConfig[size].spacing} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Premium DQ Logo - Recreating the elegant design */}
      <div className="relative">
        <motion.div 
          className={`relative flex items-center justify-center`}
          style={{ width: sizeConfig[size].svg, height: sizeConfig[size].svg }}
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Main DQ Logo SVG Recreation */}
          <svg 
            width={sizeConfig[size].svg} 
            height={sizeConfig[size].svg} 
            viewBox="0 0 100 100" 
            className="drop-shadow-lg"
          >
            {/* D Letter */}
            <path
              d="M15 20 L15 80 L45 80 C60 80 70 70 70 55 L70 45 C70 30 60 20 45 20 Z M25 30 L40 30 C50 30 55 35 55 45 L55 55 C55 65 50 70 40 70 L25 70 Z"
              fill="#1e40af"
              className="transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(30,64,175,0.3))'
              }}
            />
            
            {/* Q Letter with elegant tail */}
            <path
              d="M75 35 C85 35 90 40 90 50 L90 60 C90 70 85 75 75 75 C65 75 60 70 60 60 L60 50 C60 40 65 35 75 35 Z M75 45 C70 45 68 47 68 50 L68 60 C68 63 70 65 75 65 C80 65 82 63 82 60 L82 50 C82 47 80 45 75 45 Z"
              fill="#1e40af"
              className="transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(30,64,175,0.3))'
              }}
            />
            
            {/* Q Tail - Elegant curved tail */}
            <path
              d="M78 65 L85 72 C87 74 89 74 91 72 C93 70 93 68 91 66 L84 59"
              stroke="#1e40af"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 1px 4px rgba(30,64,175,0.4))'
              }}
            />
            
            {/* Subtle highlight for 3D effect */}
            <path
              d="M20 25 L35 25 C45 25 50 30 50 40 L50 45"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            
            <circle
              cx="75"
              cy="50"
              r="8"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
          </svg>
          
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)',
              filter: 'blur(8px)'
            }}
          />
        </motion.div>
      </div>
      
      {/* Company Name with Premium Typography */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${sizeConfig[size].text} font-bold tracking-wide transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} 
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              textShadow: theme === 'dark' 
                ? '0 4px 12px rgba(0,0,0,0.4)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              letterSpacing: '0.5px',
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)'
                : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: theme === 'dark' ? 'white' : 'transparent',
              backgroundClip: 'text'
            }}
          >
            Do<span style={{ color: '#1e40af' }}>Q</span>mentor
          </span>
          
          {/* Subtle underline accent */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mt-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              boxShadow: '0 2px 8px rgba(30,64,175,0.3)'
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
