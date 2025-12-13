'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/constants';

export const CTASection = () => {
  const telHref = `tel:${COMPANY_INFO.phone.replace(/\s|\(|\)|-/g, '')}`;
  const mailHref = `mailto:${COMPANY_INFO.email}`;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="badge mb-4 sm:mb-6">Get Started</span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 sm:mb-6 px-2">
            <span className="text-white">Ready to expand your </span>
            <span className="text-gradient-accent">global reach?</span>
          </h2>

          <p className="text-base sm:text-lg text-surface-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Let's discuss how {COMPANY_INFO.name} can help you navigate international business
            and unlock new growth opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 px-4">
            <button className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              View Services
            </button>
          </div>

          {/* Contact Info - Mobile Stacked */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-surface-400">
            <a
              href={telHref}
              className="flex items-center gap-2 hover:text-white transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <span className="hidden sm:block text-surface-700">•</span>

            <a
              href={mailHref}
              className="flex items-center gap-2 hover:text-white transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </motion.div>

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-surface-800"
        >
          <p className="text-xs sm:text-sm text-surface-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
