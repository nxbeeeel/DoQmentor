'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { emailService } from '@/services/emailService';
import { CONTACT_EMAIL } from '@/constants';

export const OtherServicesSection = () => {
  const [formData, setFormData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.trim()) return;

    setIsSubmitting(true);
    
    try {
      const subject = 'Service Request - DoQmentor';
      const body = `Service Request Details:\n\n${formData}\n\nBest regards,\nPotential Client`;
      
      await emailService.sendEmail(CONTACT_EMAIL, subject, body);
      setIsSubmitted(true);
      setFormData('');
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Don't See What You <span className="text-royal-blue">Need?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Tell us about your specific requirements, and we'll be in touch to help you find the right solution.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8"
            >
              <div className="text-green-600 text-lg font-semibold mb-2">
                Thank you for your request!
              </div>
              <p className="text-green-700">
                Your email client should have opened with your request. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-royal-blue hover:text-royal-blue-dark font-semibold"
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
              <div className="relative">
                <textarea
                  value={formData}
                  onChange={(e) => setFormData(e.target.value)}
                  placeholder="Describe the service you are looking for..."
                  rows={6}
                  className="w-full p-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-royal-blue focus:outline-none resize-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.trim()}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
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
    </Section>
  );
};
