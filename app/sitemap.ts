import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hybrixai.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://hybrixai.com/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}