import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tracychacon.github.io';

  // Array of your existing blog post slugs
  const blogPosts = [
    'Breaking Things to Build Things: My Journey to Software QA & Development'
  ];

  // Map individual posts to structured sitemap entries
  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    // YYYY-MM-DD format
    lastModified: new Date().toISOString().split('T')[0], 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      // High structural priority for your main hub
      priority: 1.0, 
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...blogUrls,
  ];
}