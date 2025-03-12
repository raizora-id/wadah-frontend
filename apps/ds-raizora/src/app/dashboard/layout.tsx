'use client';
import MainLayout from '@/components/layouts/main-content';
import { StatsLoader } from '@/modules/home/components/stats-loader';
import { TabNavigation, TabNavigationLink } from '@packages/ui/components/base/tab-navigation'
import SwapLayout from '@/modules/home/components/swap-layout';import { TransactionsLoader } from '@/modules/home/components/transaction-loader';
import { useTranslation } from '@refinedev/core';

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

export default function Page() {
    const { translate: t } = useTranslation();

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
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
            </MainLayout>
        </ProtectedLayout>
    );
}
