'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { emailService } from '@/services/emailService';

export const OtherServicesSection = () => {
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
      const success = await emailService.sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-surface-950"
    >
      <div className="section-glow opacity-40" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge mb-4 sm:mb-6">Custom Services</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            <span className="text-white">Need something </span>
            <span className="text-gradient-accent">specific?</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-400 px-4">
            Tell us about your requirements and we'll find the right solution.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 sm:p-10 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-5">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
              Thank you!
            </h3>
            <p className="text-sm sm:text-base text-surface-400 mb-5 sm:mb-6">
              We've received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn btn-secondary"
            >
              Send Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card p-5 sm:p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-sm font-medium text-surface-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block text-sm font-medium text-surface-300 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label className="block text-sm font-medium text-surface-300 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="input resize-none"
                placeholder="Describe what you need..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Request
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
};
