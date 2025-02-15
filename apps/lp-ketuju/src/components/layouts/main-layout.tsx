'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@packages/ui/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@packages/ui/components/ui/sheet';

import { MainSidebar } from '../navigation/main-sidebar';
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className='h-screen bg-gray-50'>
            <div className='mx-auto h-full bg-white shadow-2xl lg:container'>
                {/* Mobile Navigation */}
                <div className='flex h-14 items-center justify-between border-b px-4 lg:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='ghost' size='icon' className='lg:hidden'>
                                <Menu className='h-5 w-5' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left' className='w-72 p-0'>
                            <MainSidebar />
                        </SheetContent>
                    </Sheet>
                    <h1 className='text-lg font-semibold'>Notes</h1>
                </div>

                <div className='grid h-[calc(100vh-3.5rem)] grid-cols-1 lg:h-screen lg:grid-cols-12'>
                    {/* Desktop Sidebar */}
                    <div
                        className={cn(
                            'hidden border-r bg-gray-50/50 lg:col-span-2 lg:block xl:col-span-2',
                            isSidebarOpen ? 'block' : 'hidden'
                        )}>
                        <div className='flex h-14 items-center justify-between border-b px-4'>
                            <h2 className='text-lg font-semibold'>Menu</h2>
                            <Button variant='ghost' size='icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <PanelLeftClose className='h-4 w-4' />
                            </Button>
                        </div>
                        <MainSidebar />
                    </div>

                    {/* Content */}
                    <div className='bg-white lg:col-span-10 xl:col-span-10'>
                        {!isSidebarOpen && (
                            <Button variant='ghost' size='icon' className='m-4' onClick={() => setIsSidebarOpen(true)}>
                                <PanelLeftOpen className='h-4 w-4' />
                            </Button>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
