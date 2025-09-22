import { Service, Testimonial, Stat } from '@/types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'PANCARD & PASSPORT',
    description: 'Complete assistance with PAN card applications and passport services for seamless documentation.',
    icon: 'CreditCard'
  },
  {
    id: '2',
    title: 'EMBASSY ATTESTATION',
    description: 'Professional embassy attestation services for all your international document requirements.',
    icon: 'Globe'
  },
  {
    id: '3',
    title: 'IMPORT & EXPORT LICENCE',
    description: 'Streamlined import and export licensing to facilitate your international trade operations.',
    icon: 'Briefcase'
  },
  {
    id: '4',
    title: 'TRADE MARK REGISTRATION',
    description: 'Comprehensive trademark registration services to protect your brand and intellectual property.',
    icon: 'Award'
  },
  {
    id: '5',
    title: 'COMPANY REGISTRATION',
    description: 'End-to-end company registration services for establishing your business presence.',
    icon: 'Building'
  },
  {
    id: '6',
    title: 'DEED & GST REGISTRATION',
    description: 'Professional deed preparation and GST registration for complete business compliance.',
    icon: 'FileText'
  },
  {
    id: '7',
    title: 'ALL TYPE OF BUSINESS LICENCES',
    description: 'Comprehensive licensing solutions for all types of business operations and requirements.',
    icon: 'Shield'
  },
  {
    id: '8',
    title: 'REAL ESTATE SERVICES',
    description: 'Complete real estate solutions including property documentation, registration, and legal compliance.',
    icon: 'Home'
  },
  {
    id: '9',
    title: 'ALL KINDS OF INSURANCE SERVICES',
    description: 'Complete insurance solutions tailored to protect your business and personal interests.',
    icon: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'prashanth-nair',
    name: 'Prashanth Nair',
    company: 'Public Review',
    image: 'PN',
    rating: 5,
    text: 'Very Cooperative, Polite and Fast reply. Helps you through the whole process'
  },
  {
    id: 's',
    name: 'S',
    company: 'Public Review',
    image: 'S',
    rating: 5,
    text: 'I will send to my article on September 11th then getting acceptance in within 35 days thank you inspire solution.'
  },
  {
    id: 'binty-benzie-alexander',
    name: 'Binty Benzie Alexander',
    company: 'Public Review',
    image: 'BBA',
    rating: 5,
    text: 'Quick and Great Service. Sorted our passport renewal service very smoothly.'
  }
];

export const STATS: Stat[] = [
  { id: 'clients', icon: 'Users', number: '500+', label: 'Clients Served' },
  { id: 'countries', icon: 'Globe', number: '25+', label: 'Countries' },
  { id: 'success', icon: 'Award', number: '98%', label: 'Success Rate' },
  { id: 'experience', icon: 'Clock', number: '10+', label: 'Years Experience' }
];

export const CONTACT_EMAIL = 'documentor.Com@gmail.com';

export const COMPANY_INFO = {
  name: 'DoQmentor',
  tagline: 'Global Consulting for a Connected World',
  description: 'Empowering your vision with comprehensive international consultancy services.',
  phone: '+91 90723 54444',
  email: CONTACT_EMAIL
};
