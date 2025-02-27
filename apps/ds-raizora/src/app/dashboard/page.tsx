'use client';

import MainLayout from '@/components/layouts/main-content';
import { ProductTable } from '@/modules/products/components/product-table';
import { useTranslation } from '@refinedev/core';

import ProtectedLayout from '../../components/layouts/protected-layout';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];
export default function Page() {
    const { translate: t } = useTranslation();

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
                <p>{t('categories.fields.title')}</p>
            </MainLayout>
        </ProtectedLayout>
    );
}
