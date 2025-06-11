import { HeroSection } from '@/components/hero-section';
import { ServicesOverview } from '@/components/services-overview';
import { WhyChooseUs } from '@/components/why-choose-us';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatsSection } from '@/components/stats-section';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}