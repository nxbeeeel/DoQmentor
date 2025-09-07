'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, STATS } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { useTheme } from '@/contexts/ThemeContext';

export const AboutSection = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? '#1e3a8a'
          : '#87CEEB'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}> 
            About <span className={theme === 'dark' ? 'text-blue-200' : 'text-teal-200'}>DoQmentor</span>
          </h2>
          
          <p className={`text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`} style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
            At {COMPANY_INFO.name}, we believe in empowering businesses to reach their global potential. 
            Our comprehensive consultancy services bridge the gap between ambition and achievement, 
            providing expert guidance through the complex landscape of international documentation, 
            licensing, and business expansion.
          </p>
          
          <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`}>
            With over a decade of experience and a commitment to excellence, we've helped hundreds 
            of businesses navigate regulatory requirements, secure necessary documentation, and 
            establish their presence in global markets with confidence and precision.
          </p>

          <Button>Learn More About Us</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {STATS.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 sm:p-8 text-center" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}} 
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)'}}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2" style={{textShadow: '0 2px 15px rgba(0,0,0,0.3)'}}>
                  {stat.number}
                </div>
                <p className="text-sm sm:text-base text-blue-100 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
