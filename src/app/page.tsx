import {
  HeroSection,
  ServicesSection,
  OtherServicesSection,
  TestimonialsSection,
  CustomerReviewSection,
  AboutSection,
  CTASection
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-600">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CustomerReviewSection />
      <OtherServicesSection />
      <CTASection />
    </main>
  );
}
