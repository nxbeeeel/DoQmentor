import { CustomCursor } from '@/components/common/CustomCursor';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { OtherServicesSection } from '@/components/sections/OtherServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';

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
