'use client';
import MainLayout from '@/components/layouts/main-content';
import { TabNavigation, TabNavigationLink } from '@packages/ui/components/base/tab-navigation'
import { useTranslation } from '@refinedev/core';
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from '../../../site.config';
import { MetricsCards } from '@/modules/klolatoko/stats/components/metrics-card';

import ProtectedLayout from '../../components/layouts/protected-layout';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];

const navigation = [
    { name: "Overview", href: siteConfig.baseLinks.quotes.overview },
    { name: "Monitoring", href: siteConfig.baseLinks.quotes.monitoring },
    { name: "Audits", href: siteConfig.baseLinks.quotes.audits },
  ]

  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const { translate: t } = useTranslation();
    const pathname = usePathname()

    console.log(pathname)

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
                <div className="p-4 sm:p-6">
                    <MetricsCards />
                </div>
                <TabNavigation className="mt-6 gap-x-4 px-4 sm:px-6">
                    {navigation.map((item) => (
                        <TabNavigationLink
                        key={item.name}
                        asChild
                        active={pathname === item.href}
                        >
                        <Link href={item.href}>{item.name}</Link>
                        </TabNavigationLink>
                    ))}
                </TabNavigation>
                <>{children}</>
            </MainLayout>
        </ProtectedLayout>
    );
}
