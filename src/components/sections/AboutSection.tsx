'use client';

import { motion } from 'framer-motion';
import { COMPANY_INFO, STATS } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950"
    >
      <div className="section-glow opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="badge mb-4 sm:mb-6">About Us</span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
              <span className="text-white">Why choose </span>
              <span className="text-gradient-accent">{COMPANY_INFO.name}</span>
            </h2>

            <p className="text-surface-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              We believe in empowering businesses to reach their global potential.
              Our services bridge the gap between ambition and achievement.
            </p>

            <p className="text-surface-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              With over a decade of experience, we've helped hundreds of businesses
              navigate regulatory requirements and establish global presence.
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary"
            >
              Start a Briefing
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {STATS.map((stat, index) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-4 sm:p-6 text-center"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-accent-light" />
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1">
                    {stat.number}
                  </div>

                  <p className="text-xs sm:text-sm text-surface-500">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
};
