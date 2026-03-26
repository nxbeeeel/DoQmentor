'use client';

import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative bg-[#0c1728] px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="section-glow opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <span className="badge mb-5">Core Disciplines</span>
            <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Premium service architecture for business movement, licensing,
              protection, and growth.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-surface-400 sm:text-base">
            Our multi-disciplinary operating model combines documentation precision,
            regulatory structure, and execution support so clients can move with
            confidence instead of administrative friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            const isExpanded = service.gridClass?.includes('col-span-2');
            const cardStyle = {
              '--service-accent': service.accent,
              '--service-accent-soft': service.accentSoft,
            } as CSSProperties;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                style={cardStyle}
                className={`service-card glass-panel p-4 sm:p-5 ${isExpanded ? 'service-card-expanded' : ''} ${service.gridClass ?? 'xl:col-span-1'}`}
              >
                <div className="service-media-frame" aria-hidden="true">
                  <div
                    className="service-media"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: service.imagePosition ?? 'center',
                    }}
                  />
                </div>

                <div className="service-copy">
                  <div className={`service-copy-surface ${isExpanded ? 'service-copy-surface-expanded' : ''}`}>
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[#0d1a2c]/52 text-accent-light backdrop-blur-xl">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <p className="mb-3 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-surface-300">
                        {service.eyebrow}
                      </p>
                      <h3 className="mb-3 max-w-sm text-xl font-semibold text-white sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="max-w-md text-sm leading-7 text-surface-200">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-light">
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};
