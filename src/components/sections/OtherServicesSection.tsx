'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Section, Button } from '@/components';
import { emailService } from '@/services/emailService';
import { CONTACT_EMAIL } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';

export const OtherServicesSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    
    try {
      const subject = 'Service Request - DoQmentor';
      const body = `Service Request Details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
      
      await emailService.sendEmail(CONTACT_EMAIL, subject, body);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      style={{
        background: theme === 'dark' 
          ? '#1e3a8a'
          : '#87CEEB'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Don't See What You <span className={theme === 'dark' ? 'text-blue-200' : 'text-teal-200'}>Need?</span>
          </h2>
          
          <p className={`text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-blue-100' : 'text-teal-100'}`}>
            Tell us about your specific requirements, and we'll be in touch to help you find the right solution.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="text-white text-lg font-semibold mb-2">
                Thank you for your request!
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-teal-100'}>
                Your email client should have opened with your request. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className={`mt-4 font-semibold ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-white hover:text-teal-200'}`}
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your Name *"
                    className="w-full p-4 text-base sm:text-lg bg-white/10 border-2 border-white/20 rounded-xl focus:border-white focus:outline-none transition-colors duration-300 text-white placeholder-blue-200"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Email Address *"
                    className="w-full p-4 text-base sm:text-lg bg-white/10 border-2 border-white/20 rounded-xl focus:border-white focus:outline-none transition-colors duration-300 text-white placeholder-blue-200"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-6">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Phone Number (Optional)"
                  className="w-full p-4 text-base sm:text-lg bg-white/10 border-2 border-white/20 rounded-xl focus:border-white focus:outline-none transition-colors duration-300 text-white placeholder-blue-200"
                />
              </div>
              <div className="relative">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe the service you are looking for... *"
                  rows={6}
                  className="w-full p-4 sm:p-6 text-base sm:text-lg bg-white/10 border-2 border-white/20 rounded-xl focus:border-white focus:outline-none resize-none transition-colors duration-300 text-white placeholder-blue-200"
                  required
                />
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  className="bg-white text-royal-blue hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Request
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
