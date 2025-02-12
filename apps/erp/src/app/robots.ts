import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/dashboard/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/dashboard'],
      },
    ],
    sitemap: 'https://redant.com/sitemap.xml',
  }
}
