'use client';

import { LayoutsNavs } from '@packages/ui/components/layouts/navbars/layouts-navs';
import { AppSidebar } from '@packages/ui/components/layouts/sidebars/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@packages/ui/components/layouts/sidebars/sidebar';

import ProtectedLayout from '../../components/layouts/protected-layout';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];
export default function Page() {
    return (
        <ProtectedLayout>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <LayoutsNavs sidebarTrigger={<SidebarTrigger />} breadcrumbProps={{ items: router_bearcrums }} />
                    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
                        <div className='flex flex-1 flex-col gap-4 p-4'>
                            {Array.from({ length: 24 }).map((_, index) => (
                                <div key={index} className='bg-muted/50 aspect-video h-12 w-full rounded-lg' />
                            ))}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ProtectedLayout>
    );
}
