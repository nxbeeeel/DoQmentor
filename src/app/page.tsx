import {
  CustomCursor,
  HeroSection,
  ServicesSection,
  OtherServicesSection,
  TestimonialsSection,
  AboutSection,
  CTASection
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <HeroSection />
      <ServicesSection />
      <OtherServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
