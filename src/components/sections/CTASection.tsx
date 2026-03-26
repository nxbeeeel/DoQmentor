'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/constants';

const currentYear = new Date().getFullYear();

export const CTASection = () => {
  const telHref = `tel:${COMPANY_INFO.phone.replace(/\s|\(|\)|-/g, '')}`;
  const mailHref = `mailto:${COMPANY_INFO.email}`;

  return (
    <section className="relative overflow-hidden bg-surface-950 px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="badge mb-4 sm:mb-6">Get Started</span>

          <h2 className="mb-4 px-2 text-2xl font-semibold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">Ready to expand your </span>
            <span className="text-gradient-accent">global reach?</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl px-4 text-base text-surface-400 sm:mb-10 sm:text-lg">
            Let&apos;s discuss how {COMPANY_INFO.name} can help you navigate
            international business and unlock new growth opportunities.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 px-4 sm:mb-12 sm:flex-row sm:gap-4">
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-primary px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-secondary px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base"
            >
              View Services
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-surface-400 sm:flex-row sm:gap-6">
            <a
              href={telHref}
              className="flex items-center gap-2 text-sm transition-colors hover:text-white sm:text-base"
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <span className="hidden text-surface-700 sm:block">|</span>

            <a
              href={mailHref}
              className="flex items-center gap-2 text-sm transition-colors hover:text-white sm:text-base"
            >
              <Mail className="h-4 w-4" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-surface-800 pt-6 sm:mt-20 sm:pt-8"
        >
          <p className="text-xs text-surface-500 sm:text-sm">
            Copyright {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
