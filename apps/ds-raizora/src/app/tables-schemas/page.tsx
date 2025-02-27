'use client';

import ProtectedLayout from '../../components/layouts/protected-layout';
import { ProductTable } from '../../modules/products/components/product-table';
import MainLayout from './../../components/layouts/main-content';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];

export default function Page() {
    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
                <div className='mt-10 flex items-center justify-center'>
                    <div className='w-full max-w-4xl'>
                        <ProductTable />
                    </div>
                </div>
            </MainLayout>
        </ProtectedLayout>
    );
}
