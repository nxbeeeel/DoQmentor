import type { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: COMPANY_INFO.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
