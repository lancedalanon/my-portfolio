import { MetadataRoute } from 'next'
 
// Base URL for the sitemap
const baseUrl = 'https://lancedalanon.netlify.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/projects', '/awards'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}