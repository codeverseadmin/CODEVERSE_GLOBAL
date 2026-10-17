import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';
import Hero from '@/components/home/Hero';
import SelectedWork from '@/components/home/SelectedWork';
import ServicesSection from '@/components/home/ServicesSection';
import Philosophy from '@/components/home/Philosophy';
import LabsSection from '@/components/home/LabsSection';
import Process from '@/components/home/Process';
import WhyCodeverse from '@/components/home/WhyCodeverse';
import FounderSection from '@/components/home/FounderSection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.descriptor}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.descriptor}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServicesSection />
      <Philosophy />
      <LabsSection />
      <Process />
      <WhyCodeverse />
      <FounderSection />
      <FinalCTA />
    </>
  );
}
