import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getServiceBySlug } from '@/lib/data/services';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'AI & Intelligent Solutions',
  description: 'Practical AI integrations, workflow automation, and intelligent features — AI solutions that add genuine value to your product or process.',
  path: '/services/ai-solutions',
});

export default function AISolutionsPage() {
  const service = getServiceBySlug('ai-solutions');
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
