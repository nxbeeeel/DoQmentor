'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, STATS } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const AboutSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6 px-4">
            About <span className="text-royal-blue">{COMPANY_INFO.name}</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At {COMPANY_INFO.name}, we believe in empowering businesses to reach their global potential. 
            Our comprehensive consultancy services bridge the gap between ambition and achievement, 
            providing expert guidance through the complex landscape of international documentation, 
            licensing, and business expansion.
          </p>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                className="bg-gray-50 p-4 sm:p-6 rounded-2xl text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-royal-blue" />
                </div>
                <h3 className="font-bold text-2xl sm:text-3xl text-charcoal mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};
