'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SERVICES } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const ServicesSection = () => {
  return (
    <Section background="gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6 px-4">
          Our <span className="text-royal-blue">Services</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Comprehensive solutions for your global business needs, delivered with precision and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service, index) => {
          const IconComponent = getIconComponent(service.icon);
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-royal-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-royal-blue/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-royal-blue" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-base sm:text-lg text-charcoal mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
