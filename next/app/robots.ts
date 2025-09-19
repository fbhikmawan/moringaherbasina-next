import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const disallowRobots = process.env.DISALLOW_ROBOTS === 'true'
  const siteUrl = process.env.SITE_URL || 'https://moringaherbasina.com'

  return {
    rules: {
      userAgent: '*',
      allow: disallowRobots ? [] : ['/'],
      disallow: disallowRobots ? ['/'] : []
    },
    sitemap: `${siteUrl}/sitemap.xml`
  }
}