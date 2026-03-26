import {
  HeroSection,
  ServicesSection,
  OtherServicesSection,
  TestimonialsSection,
  CustomerReviewSection,
  AboutSection,
  CTASection
} from '@/components';
import { listReviews } from '@/lib/reviews';
import { COMPANY_INFO } from '@/constants';

export default async function Home() {
  const reviews = await listReviews();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.siteUrl,
    image: `${COMPANY_INFO.siteUrl}/logo.png`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    description: COMPANY_INFO.description,
    areaServed: 'Worldwide',
    serviceType: 'Documentation, licensing, registration, and business consulting',
  };

  return (
    <main className="min-h-screen bg-surface-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CustomerReviewSection initialReviews={reviews} />
      <OtherServicesSection />
      <CTASection />
    </main>
  );
}
