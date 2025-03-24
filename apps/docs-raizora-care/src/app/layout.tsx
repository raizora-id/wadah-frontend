// Import global CSS stylesheet
import '@packages/ui/globals.css'
import '../styles/global.css'


import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import { env } from 'std-env'
import { cn } from '@packages/ui/lib/utils'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

const baseUrl = env.NEXT_PUBLIC_BASE_URL || 'https://care.raizora.com'
const metaDescription = `resource for assistance across all our business lines, designed to support and guide users throughout their journey with our interconnected ecosystem of services.`
const metaTitle = 'Raizora Care Center'
const ogImageUrl = 'https://twistail.com/images/banner.png'

export const metadata: Metadata = {
  title: { default: metaTitle, template: '%s - Twistail' },
  description: metaDescription,
  keywords: `Open Source,Responsive,UI Components,React,Tailwind CSS v4,Radix UI,TypeScript,Next.js,Server Components`,
  creator: '@raizora_people',
  openGraph: {
    url: baseUrl,
    title: metaTitle,
    description: metaDescription,
    images: { url: ogImageUrl },
    siteName: 'Raizora',
    type: 'website',
  },
  twitter: {
    site: baseUrl,
    title: metaTitle,
    description: metaDescription,
    images: { url: ogImageUrl, alt: metaTitle },
    card: 'summary_large_image',
    creator: '@raizora_people',
  },
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontMono.variable)}>
        <RootProvider
          search={{
            enabled: true,
            options: { type: 'static' },
            links: [
              ['Homepage', '/'],
              ['Documentation', '/docs/ui'],
              ['Changelog', '/docs/ui/changelog'],
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
