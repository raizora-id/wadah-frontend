import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { baseOptions } from '#/app/layout.config'
import { source } from '#/lib/source'

export const metadata: Metadata = {
  title: {
    default: 'Raizora Care - Pusat Bantuan dari Raizora',
    template: '%s - Raizora Care',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{ ...baseOptions.nav, mode: 'auto' }}
      tabMode="sidebar"
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  )
}
