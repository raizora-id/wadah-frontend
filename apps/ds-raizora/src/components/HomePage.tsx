'use client';

import { AppSidebar } from '@packages/ui/components/layouts/sidebars/app-sidebar';
import { ScrollArea, ScrollBar } from '@packages/ui/components/ui/scroll-area';
import { Separator } from '@packages/ui/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@packages/ui/components/ui/sidebar';

import { NavBreadcrumb } from './nav-sidebar/nav-breadcrumb';

export default function Page() {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <SidebarInset className='w-full overflow-hidden'>
                <div className='sticky top-0 z-10'>
                    <header className='bg-background/80 flex h-14 w-full shrink-0 items-center justify-between border-b px-2 backdrop-blur-sm sm:h-16 sm:px-4'>
                        <div className='flex items-center gap-2'>
                            <SidebarTrigger className='-ml-0.5 sm:-ml-1' />
                            <Separator orientation='vertical' className='mr-2 hidden h-4 sm:block' />
                            <NavBreadcrumb className='hidden sm:flex' />
                        </div>
                    </header>
                </div>

                <ScrollArea className='flex h-[calc(100vh-5rem)] flex-col gap-4 p-2 pt-0 sm:h-[calc(100vh-5rem)] sm:p-4'>
                    <div className='p-2 sm:py-4'>
                        <p>dfgdsfghjkhgf dfgfdsdfgfds </p>
                    </div>
                    <ScrollBar orientation='horizontal' />
                </ScrollArea>
            </SidebarInset>
        </SidebarProvider>
    );
}
