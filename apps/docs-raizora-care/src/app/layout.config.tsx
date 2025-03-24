/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(site)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

const TitleComponent = () => (
  <div className="flex w-full flex-1 items-center gap-2 py-1.5">
    <Image
      src="/images/brand-svg/brand-icon-dark.svg"
      className="h-5 w-auto"
      alt="Twistail"
      width={600}
      height={250}
      unoptimized
    />
    <span>Raizora Care</span>
  </div>
)

export const baseOptions: BaseLayoutProps = {
  nav: { url: '', title: <TitleComponent />, transparentMode: 'always' },
  links: [
    { text: 'Kebijakan Layanan', url: '/service-policy' },
    {
      text: 'Kebijakan Privasi',
      url: '/privacy',
      external: true,
      active: 'url',
    },
  ],
}
