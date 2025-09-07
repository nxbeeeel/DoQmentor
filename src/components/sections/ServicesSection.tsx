'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SERVICES } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-royal-blue relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
            Our <span className="text-blue-200">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4" style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
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
              <div className="group p-6 sm:p-8 rounded-2xl" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)'}}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4 leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
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
