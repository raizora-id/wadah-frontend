'use client';

import React from 'react';
import Link from 'next/link';
import useScroll from '../../../hooks/use-scroll';
import { useSmoothScroll } from 'ui/src/hooks/use-smooth-scroll';
import { Button } from '../../../components/base/button';
import { cn } from '../../../lib/utils';
import { HeaderDefaultLogo } from './header-ketuju-default-logo';

interface NavigationItem {
    label: string; // Label untuk navigation item
    target: string; // URL tujuan
}

interface NavigationProps {
    logo?: React.ReactNode; // Props untuk logo
    navigationItems?: NavigationItem[]; // Props untuk navigation items
    contactButtonLabel?: string; // Label untuk tombol kontak
    onContactClick?: () => void; // Fungsi yang akan dipanggil saat tombol kontak diklik
}

export function Navigation({
    logo = (
        <Link href={'/'} aria-label='Home'>
            <span className='sr-only'>Company logo</span>
            <HeaderDefaultLogo className='w-28 md:w-32' />
        </Link>
    ), // Default logo
    navigationItems = [
        { label: 'Fitur', target: 'feature' },
        { label: 'Harga', target: 'price' },
        { label: 'Testimoni', target: 'testimony' },
    ], // Default navigation items
    contactButtonLabel = 'Kontak kami', // Default label untuk tombol kontak
    onContactClick = () => console.log('Kontak kami clicked'), // Default fungsi untuk tombol kontak
}: NavigationProps) {
    const scrolled = useScroll(15);
    const [open, setOpen] = React.useState(false);

    // Get the scroll function from our hook
    const { scrollToElement } = useSmoothScroll()

    React.useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = () => {
            setOpen(false);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange();

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <header
            className={cn(
                'animate-slide-down-fade fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform',
                open === true ? 'h-52' : 'h-16',
                scrolled || open === true
                    ? 'backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70'
                    : 'bg-white/0 dark:bg-gray-950/0'
            )}>
            <div className='w-full md:my-auto'>
                <div className='relative flex items-center justify-between'>
                    {logo} {/* Render logo dari props */}
                    <nav className='hidden md:absolute md:top-1/2 md:left-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform'>
                        <div className='flex items-center gap-10 font-medium'>
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-2 py-1 text-gray-900 dark:text-gray-50'
                                    onClick={() => scrollToElement(item.target)} // Tambahkan onClick handler
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>
                    <Button className='hidden h-10 font-semibold md:flex' onClick={onContactClick}>
                        {contactButtonLabel}
                    </Button>
                    <div className='flex gap-x-2 md:hidden'>
                        <Button>Pesan</Button>
                        <Button onClick={() => setOpen(!open)} className='aspect-square p-2'>
                            asoy
                        </Button>
                    </div>
                </div>
                <nav
                    className={cn(
                        'my-6 flex text-lg ease-in-out will-change-transform md:hidden',
                        open ? '' : 'hidden'
                    )}>
                    <ul className='space-y-4 font-medium'>
                        {navigationItems.map((item, index) => (
                            <li key={index} onClick={() => { scrollToElement(item.target); setOpen(false); }}>
                                <Link href={""}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}