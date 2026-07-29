import type { MetadataRoute } from 'next';
import { SITE } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
