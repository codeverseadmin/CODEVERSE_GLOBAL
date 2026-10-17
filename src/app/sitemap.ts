import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/data/site';
import { getAllProjectSlugs } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/web-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/custom-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/ai-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/maintenance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/start-a-project`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const projectPages: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
