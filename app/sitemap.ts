// app/sitemap.ts
import type { MetadataRoute } from 'next';

// This directive forces Next.js to compile this cleanly during static exports
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tracychacon.github.io';

  // Your existing blog post slugs
  const blogPosts = [
    'breaking-things-to-build-things'
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    // Use a standard static date string instead of a dynamic constructor
    lastModified: '2026-06-22', 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: '2026-06-22',
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2026-06-22',
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...blogUrls,
  ];
}