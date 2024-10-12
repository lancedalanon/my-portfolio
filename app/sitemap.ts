import { MetadataRoute } from 'next';
import projects from '@/constants/projects.json';
import experiences from '@/constants/experience.json';

// Base URL for the sitemap
const baseUrl = 'https://lance-dalanon.netlify.app';

// Define the specific type for changeFrequency
type ChangeFrequency = 'yearly' | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'never';

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

const experiencePaths: {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
}[] = experiences.map((experience) => {
  return {
      url: `${baseUrl}/experiences/${experience.slug}`,
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
    {
      url: `${baseUrl}/awards`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...projectPaths,
    ...experiencePaths,
  ];

  return sitemapEntries;
}
