import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production'
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? ['/'] : [],
      disallow: isProduction ? [] : ['/']
    },
    sitemap: `${siteUrl}/sitemap.xml`
  }
}