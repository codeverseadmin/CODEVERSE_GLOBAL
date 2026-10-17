import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getServiceBySlug } from '@/lib/data/services';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'E-commerce & Digital Commerce',
  description: 'E-commerce design and development — online stores, product catalogues, and custom shopping experiences built to convert.',
  path: '/services/ecommerce',
});

export default function EcommercePage() {
  const service = getServiceBySlug('ecommerce');
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
