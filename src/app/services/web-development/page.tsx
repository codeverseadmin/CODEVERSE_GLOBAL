import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getServiceBySlug } from '@/lib/data/services';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Website Design & Development',
  description: 'Professional website design and development for businesses — business sites, landing pages, portfolios, and redesigns built to perform.',
  path: '/services/web-development',
});

export default function WebDevelopmentPage() {
  const service = getServiceBySlug('web-development');
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
