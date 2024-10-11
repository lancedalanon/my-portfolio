import { MetadataRoute } from 'next';
import projects from '@/constants/projects.json';

// Base URL for the sitemap
const baseUrl = 'https://lance-dalanon.netlify.app';

// Define the specific type for changeFrequency
type ChangeFrequency = 'yearly' | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'never';

// Create an array of project slugs with the correct type for changeFrequency
const projectPaths: {
    url: string;
    lastModified: Date;
    changeFrequency: ChangeFrequency;
    priority: number;
}[] = projects.map((project) => {
    return {
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    }
});

// Function to generate the sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  // Create an array of sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly', 
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...projectPaths,
  ];

  return sitemapEntries;
}
