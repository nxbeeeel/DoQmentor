import { Service, Testimonial, Stat } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'pancard-passport',
    title: 'PANCARD & PASSPORT',
    description: 'Complete assistance with PAN card applications and passport documentation services.',
    icon: 'CreditCard'
  },
  {
    id: 'embassy-attestation',
    title: 'EMBASSY ATTESTATION',
    description: 'Professional embassy attestation services for international document verification.',
    icon: 'Globe'
  },
  {
    id: 'import-export',
    title: 'IMPORT & EXPORT LICENCE',
    description: 'Comprehensive licensing solutions for international trade operations.',
    icon: 'Briefcase'
  },
  {
    id: 'trademark',
    title: 'TRADE MARK REGISTRATION',
    description: 'Protect your brand with expert trademark registration and intellectual property services.',
    icon: 'Award'
  },
  {
    id: 'company-registration',
    title: 'COMPANY REGISTRATION',
    description: 'End-to-end company incorporation and business registration services.',
    icon: 'Building'
  },
  {
    id: 'deed-gst',
    title: 'DEED & GST REGISTRATION',
    description: 'Legal documentation and GST registration for seamless business operations.',
    icon: 'FileText'
  },
  {
    id: 'business-licenses',
    title: 'ALL TYPE OF BUSINESS LICENCES',
    description: 'Comprehensive licensing solutions for various business verticals and industries.',
    icon: 'Shield'
  },
  {
    id: 'insurance',
    title: 'ALL KINDS OF INSURANCE SERVICES',
    description: 'Complete insurance solutions to protect your business and personal interests.',
    icon: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    company: 'Global Tech Solutions',
    image: 'SJ',
    rating: 5,
    text: 'DoQmentor made our international expansion seamless. Their expertise in documentation and licensing saved us months of bureaucratic delays.'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    company: 'Import Export Dynamics',
    image: 'MC',
    rating: 5,
    text: 'Outstanding service for our import/export licensing needs. Professional, efficient, and incredibly knowledgeable about international regulations.'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    company: 'Startup Innovators',
    image: 'PS',
    rating: 5,
    text: 'From company registration to trademark protection, DoQmentor handled everything with precision. Highly recommend their comprehensive services.'
  },
  {
    id: 'david-rodriguez',
    name: 'David Rodriguez',
    company: 'Manufacturing Plus',
    image: 'DR',
    rating: 5,
    text: 'Their embassy attestation services were flawless. Quick turnaround and excellent communication throughout the entire process.'
  }
];

export const STATS: Stat[] = [
  { id: 'clients', icon: 'Users', number: '500+', label: 'Clients Served' },
  { id: 'countries', icon: 'Globe', number: '25+', label: 'Countries' },
  { id: 'success', icon: 'Award', number: '98%', label: 'Success Rate' },
  { id: 'experience', icon: 'Clock', number: '10+', label: 'Years Experience' }
];

export const CONTACT_EMAIL = 'nizarinspire@gmail.com';

export const COMPANY_INFO = {
  name: 'DoQmentor',
  tagline: 'Global Consulting for a Connected World',
  description: 'Empowering your vision with comprehensive international consultancy services.',
  phone: '+1 (555) 123-4567',
  email: CONTACT_EMAIL
};
