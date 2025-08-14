import { MetadataRoute } from 'next'
import { URL } from 'url'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://droxa-automation.com'
  
  const routes = [
    '',
    '#services',
    '#about', 
    '#testimonials',
    '#contact'
  ].map(route => ({
    url: new URL(route, baseUrl).href,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  return routes
}