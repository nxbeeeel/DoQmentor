import type { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${COMPANY_INFO.siteUrl}/sitemap.xml`,
    host: COMPANY_INFO.siteUrl,
  }
}
