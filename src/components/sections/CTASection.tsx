'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components';
import { COMPANY_INFO } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';

export const CTASection = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      style={{
        background: theme === 'dark' 
          ? '#1e3a8a'
          : '#87CEEB'
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Expand Your <span className={theme === 'dark' ? 'text-blue-200' : 'text-teal-200'}>Global Reach?</span>
          </h2>
          
          <p className={`text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`}>
            Let's discuss how {COMPANY_INFO.name} can help you navigate the complexities of international business 
            and unlock new opportunities for growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-royal-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-royal-blue transition-all duration-300 w-full sm:w-auto"
            >
              View Our Services
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{COMPANY_INFO.email}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
