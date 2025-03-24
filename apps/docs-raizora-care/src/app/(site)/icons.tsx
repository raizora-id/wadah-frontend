'use client'

import type { FC } from 'react'
import { cn } from '@packages/ui/lib/utils'

export const TwitterIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export const BlueskyIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.6192 2.10439C5.39242 3.4359 7.29973 6.13565 7.99999 7.58449C8.70031 6.13576 10.6075 3.43587 12.3808 2.10439C13.6603 1.14362 15.7333 0.400234 15.7333 2.76573C15.7333 3.23815 15.4625 6.73431 15.3037 7.3019C14.7516 9.27523 12.7399 9.77854 10.9504 9.47391C14.0784 10.0064 14.8741 11.7702 13.1556 13.534C9.89189 16.8838 8.46469 12.6935 8.09882 11.6198C8.03178 11.423 8.00041 11.3309 7.99995 11.4092C7.99949 11.3309 7.96812 11.423 7.90108 11.6198C7.53537 12.6935 6.1082 16.8839 2.84428 13.534C1.12577 11.7702 1.92148 10.0063 5.04953 9.47391C3.25998 9.77854 1.2482 9.27523 0.696198 7.3019C0.537366 6.73426 0.266571 3.2381 0.266571 2.76573C0.266571 0.400234 2.33969 1.14362 3.6191 2.10439H3.6192Z" />
    </svg>
  )
}

export const PhoneIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
  )
}

export const LinkedInIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
