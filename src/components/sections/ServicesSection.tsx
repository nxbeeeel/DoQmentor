'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { useTheme } from '@/contexts/ThemeContext';

export const ServicesSection = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="services" 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? '#1e3a8a'
          : '#87CEEB'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
            Our <span className={theme === 'dark' ? 'text-blue-200' : 'text-teal-200'}>Services</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`} style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
            Comprehensive solutions for your global business needs, delivered with precision and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div 
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/10 hover:bg-white/15'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                  style={{
                    backdropFilter: 'blur(20px)',
                    border: theme === 'dark' 
                      ? '1px solid rgba(255,255,255,0.1)' 
                      : '1px solid rgba(255,255,255,0.2)',
                    boxShadow: theme === 'dark'
                      ? '0 8px 32px rgba(0,0,0,0.3)'
                      : '0 8px 32px rgba(0,0,0,0.2)'
                  }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                  }`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4 leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
