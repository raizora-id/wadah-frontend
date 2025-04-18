'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@packages/ui/components/base/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@packages/ui/components/base/tooltip';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className='bg-background mr-2 h-8 w-8 rounded-full'
                        variant='outline'
                        size='icon'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <SunIcon className='h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-transform duration-500 ease-in-out dark:scale-100 dark:rotate-0' />
                        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] scale-1000 rotate-0 transition-transform duration-500 ease-in-out dark:scale-0 dark:-rotate-90' />
                        <span className='sr-only'>Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side='bottom'>Switch Theme</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
