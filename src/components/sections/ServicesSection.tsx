'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950"
    >
      {/* Top Glow */}
      <div className="section-glow opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="badge mb-4 sm:mb-6">Our Services</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 px-2">
            <span className="text-white">Everything you need to </span>
            <span className="text-gradient-accent">grow globally</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-400 max-w-2xl mx-auto px-4">
            Comprehensive solutions for your international business needs.
          </p>
        </motion.div>

        {/* Services Grid - Mobile 1 column, tablet 2, desktop 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SERVICES.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-5 sm:p-6 group cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/15 transition-colors">
                  <IconComponent className="w-5 h-5 text-accent-light" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-medium text-white mb-2 group-hover:text-accent-light transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-surface-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
};
