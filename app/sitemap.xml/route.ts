import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://droxa-automation.com'
  
  const routes = [
    '',
    '/#services',
    '/#about', 
    '/#testimonials',
    '/#contact'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  return routes
}