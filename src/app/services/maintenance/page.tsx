import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getServiceBySlug } from '@/lib/data/services';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Ongoing Development & Support',
  description: 'Reliable website maintenance and ongoing development support — a trusted technical partner for continued improvements and updates.',
  path: '/services/maintenance',
});

export default function MaintenancePage() {
  const service = getServiceBySlug('maintenance');
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
