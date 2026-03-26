'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Services', target: 'services' },
  { label: 'Approach', target: 'about' },
  { label: 'Reviews', target: 'reviews' },
  { label: 'Contact', target: 'contact' },
];

export const HeroSection = () => {
  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-surface-950 px-4 pb-18 pt-6 sm:px-6 sm:pt-8 lg:pb-24">
      <div className="hero-ambient" />
      <div className="hero-grid-glow" />
      <div className="section-glow opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="hero-shell rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="hidden text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-surface-400 transition-colors hover:text-white sm:inline-flex"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-primary !min-h-0 !rounded-full !px-5 !py-2.5 text-[0.65rem]"
            >
              Consultation
            </button>
          </div>
        </nav>

        <div className="grid gap-10 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center lg:gap-8 lg:pt-20 xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
            className="w-full max-w-3xl text-center lg:text-left"
          >
            <span className="badge mb-6 sm:mb-8">Strategic Excellence</span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="hero-wordmark mb-6 text-[3.2rem] font-black leading-[0.92] text-gradient sm:text-[5rem] md:text-[5.8rem] lg:text-[5.7rem] xl:text-[6.25rem]"
            >
              DoQMENTOR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-surface-200 sm:text-lg md:text-xl lg:mx-0"
            >
              Architectural business navigation for documentation, licensing,
              compliance, and global expansion. We engineer clarity from complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start"
            >
              <button
                onClick={() => scrollTo('services')}
                className="btn btn-primary px-8 py-4"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary px-8 py-4"
              >
                Executive Briefing
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-10 sm:mt-14"
            >
              <div className="hero-stats-shell mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-6 py-5 lg:mx-0 lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white sm:text-3xl">5000+</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.22em] text-surface-500">
                    Clients Served
                  </div>
                </div>
                <div className="hidden h-10 w-px bg-white/10 sm:block" />
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white sm:text-3xl">98%</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.22em] text-surface-500">
                    Success Rate
                  </div>
                </div>
                <div className="hidden h-10 w-px bg-white/10 sm:block" />
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white sm:text-3xl">15+</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.22em] text-surface-500">
                    Years of Trust
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
            className="hero-showcase relative"
          >
            <div className="hero-showcase-main glass-panel">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-surface-400">
                    Operating Overview
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Premium coordination for high-trust documentation and approvals.
                  </h2>
                </div>
                <div className="hero-signal hidden sm:flex">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-surface-300 sm:text-base">
                A cleaner operating layer for registrations, attestations, licensing,
                compliance readiness, and executive support without administrative clutter.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="hero-mini-card">
                  <p>Documentation</p>
                  <strong>Structured</strong>
                </div>
                <div className="hero-mini-card">
                  <p>Compliance</p>
                  <strong>Monitored</strong>
                </div>
                <div className="hero-mini-card">
                  <p>Expansion</p>
                  <strong>Ready</strong>
                </div>
              </div>

              <div className="mt-8 hero-progress-shell">
                <div className="hero-progress-track">
                  <span style={{ width: '78%' }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-[0.66rem] uppercase tracking-[0.22em] text-surface-500">
                  <span>Client preparedness</span>
                  <span>High confidence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
