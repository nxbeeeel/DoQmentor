import { Service, Testimonial, Stat } from '@/types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pan Card and Passport',
    description: 'Complete assistance with identity documentation, renewals, corrections, and travel paperwork workflows.',
    icon: 'CreditCard',
    image: '/premium-photos/contract-signing.jpg',
    eyebrow: 'Documentation Services',
    imagePosition: 'center 42%',
    accent: 'rgba(46, 108, 224, 0.34)',
    accentSoft: 'rgba(161, 199, 255, 0.18)',
    gridClass: 'md:col-span-2 xl:col-span-2'
  },
  {
    id: '2',
    title: 'Embassy Attestation',
    description: 'Professional attestation support for international filings, immigration, and verified document circulation.',
    icon: 'Globe',
    image: '/premium-photos/curved-tower.jpg',
    eyebrow: 'International Consultancy',
    imagePosition: 'center 36%',
    accent: 'rgba(48, 98, 182, 0.32)',
    accentSoft: 'rgba(120, 180, 255, 0.16)',
    gridClass: 'md:col-span-2 xl:col-span-1'
  },
  {
    id: '3',
    title: 'Import and Export Licence',
    description: 'Licensing support for trade operations, customs readiness, and compliant cross-border movement.',
    icon: 'Briefcase',
    image: '/premium-photos/cargo-ship.jpg',
    eyebrow: 'Trade Operations',
    imagePosition: 'center 58%',
    accent: 'rgba(34, 120, 163, 0.3)',
    accentSoft: 'rgba(124, 206, 255, 0.16)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '4',
    title: 'Trademark Registration',
    description: 'Brand protection strategy, filing support, and structured registration for long-term asset security.',
    icon: 'Award',
    image: '/premium-photos/strategy-meeting.jpg',
    eyebrow: 'Brand Protection',
    imagePosition: 'center 30%',
    accent: 'rgba(50, 90, 186, 0.3)',
    accentSoft: 'rgba(173, 198, 255, 0.14)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '5',
    title: 'Company Registration',
    description: 'End-to-end entity setup for founders, family businesses, and expansion-driven corporate structures.',
    icon: 'Building',
    image: '/premium-photos/partners-meeting.jpg',
    eyebrow: 'Corporate Setup',
    imagePosition: 'center 34%',
    accent: 'rgba(42, 100, 170, 0.3)',
    accentSoft: 'rgba(124, 184, 255, 0.14)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '6',
    title: 'Deed and GST Registration',
    description: 'Precision support for deeds, tax onboarding, and operational registration with clean paperwork control.',
    icon: 'FileText',
    image: '/premium-photos/executive-desk.jpg',
    eyebrow: 'Compliance Services',
    imagePosition: 'center 42%',
    accent: 'rgba(68, 99, 162, 0.28)',
    accentSoft: 'rgba(191, 211, 255, 0.12)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '7',
    title: 'Business Licences',
    description: 'Licensing support across regulated business categories, sector approvals, and operating readiness.',
    icon: 'Shield',
    image: '/premium-photos/glass-tower.jpg',
    eyebrow: 'Operational Readiness',
    imagePosition: 'center 46%',
    accent: 'rgba(34, 88, 176, 0.3)',
    accentSoft: 'rgba(134, 180, 255, 0.15)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '8',
    title: 'Real Estate Services',
    description: 'Property documentation, registration support, title clarity, and transaction-focused legal processing.',
    icon: 'Home',
    image: '/premium-photos/real-estate-facade.jpg',
    eyebrow: 'Asset Structuring',
    imagePosition: 'center 44%',
    accent: 'rgba(38, 96, 148, 0.28)',
    accentSoft: 'rgba(147, 190, 255, 0.13)',
    gridClass: 'xl:col-span-1'
  },
  {
    id: '9',
    title: 'Insurance Services',
    description: 'Coverage guidance for personal, corporate, and operational risk protection with practical clarity.',
    icon: 'Users',
    image: '/premium-photos/window-briefing.jpg',
    eyebrow: 'Risk Shielding',
    imagePosition: 'center 36%',
    accent: 'rgba(32, 98, 166, 0.3)',
    accentSoft: 'rgba(146, 192, 255, 0.14)',
    gridClass: 'md:col-span-2 xl:col-span-2'
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

export const CONTACT_EMAIL = 'doqmentor.com@gmail.com';

export const COMPANY_INFO = {
  name: 'DoQmentor',
  tagline: 'Global Consulting for a Connected World',
  description: 'Empowering your vision with comprehensive international consultancy services.',
  phone: '+91 90723 54444',
  email: CONTACT_EMAIL,
  siteUrl: 'https://doqmentor.com'
};
