import { Suspense } from 'react';

import Link from 'next/link';

import PageContainer from '@/components/layout/page-container';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@packages/ui/components/base/button';
import { Heading } from '@packages/ui/components/base/heading';
import { Separator } from '@packages/ui/components/base/separator';
import { DataTableSkeleton } from '@packages/ui/components/base/table/data-table-skeleton';

import ProductListingPage from './_components/product-listing';
import ProductTableAction from './_components/product-tables/product-table-action';
import { Plus } from 'lucide-react';
import { SearchParams } from 'nuqs/parsers';

export const metadata = {
    title: 'Dashboard: Products'
};

type pageProps = {
    searchParams: SearchParams;
};

export default async function Page({ searchParams }: pageProps) {
    // Allow nested RSCs to access the search params (in a type-safe way)
    searchParamsCache.parse(searchParams);

    // This key is used for invoke suspense if any of the search params changed (used for filters).
    const key = serialize({ ...searchParams });

    return (
        <PageContainer>
            <div className='space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading title='Products' description='Manage products (Server side table functionalities.)' />
                    <Link href='/dashboard/product/new' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
                        <Plus className='mr-2 h-4 w-4' /> Add New
                    </Link>
                </div>
                <Separator />
                <ProductTableAction />
                <Suspense key={key} fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
                    <ProductListingPage />
                </Suspense>
            </div>
        </PageContainer>
    );
}
