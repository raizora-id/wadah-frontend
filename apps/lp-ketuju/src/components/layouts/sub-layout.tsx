'use client';

import { useState } from 'react';
import type React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@packages/ui/components/ui/button';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

// Added import for React

interface SubLayoutProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

export function SubLayout({ sidebar, children }: SubLayoutProps) {
    const [isListOpen, setIsListOpen] = useState(true);

    return (
        <div className='h-full'>
            {/* Mobile Navigation */}
            <div className='flex h-14 items-center justify-between border-b px-4 lg:hidden'>
                <h1 className='text-lg font-semibold'>Submenu</h1>
                <Button variant='ghost' size='icon' className='lg:hidden' onClick={() => setIsListOpen(!isListOpen)}>
                    {isListOpen ? <PanelLeftClose className='h-5 w-5' /> : <PanelLeftOpen className='h-5 w-5' />}
                </Button>
            </div>

            <div className='grid h-[calc(100vh-7rem)] grid-cols-1 lg:h-[calc(100vh-3.5rem)] lg:grid-cols-12'>
                {/* Submenu List */}
                <div
                    className={cn(
                        'border-r bg-white transition-all duration-300 ease-in-out',
                        isListOpen ? 'block lg:col-span-3 xl:col-span-3' : 'hidden lg:col-span-0 lg:block xl:col-span-0'
                    )}>
                    <div className='flex h-14 items-center justify-between border-b px-4'>
                        <h2 className='text-lg font-semibold'>Categories</h2>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='lg:hidden'
                            onClick={() => setIsListOpen(!isListOpen)}>
                            <PanelLeftClose className='h-4 w-4' />
                        </Button>
                    </div>
                    {sidebar}
                </div>

                {/* Content */}
                <div
                    className={cn(
                        'bg-white',
                        isListOpen
                            ? 'hidden lg:col-span-9 lg:block xl:col-span-9'
                            : 'block lg:col-span-12 xl:col-span-12'
                    )}>
                    {children}
                </div>
            </div>
        </div>
    );
}
