import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getServiceBySlug } from '@/lib/data/services';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Software & Web Applications',
  description: 'Custom web application development — dashboards, portals, booking systems, and business tools built to your exact requirements.',
  path: '/services/custom-software',
});

export default function CustomSoftwarePage() {
  const service = getServiceBySlug('custom-software');
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
