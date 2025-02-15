'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@packages/ui/components/ui/button';
import { ScrollArea } from '@packages/ui/components/ui/scroll-area';

import { BookOpen, FileText, FolderIcon, Gift, Home, type LucideIcon, Settings, ShoppingBag } from 'lucide-react';

interface MenuItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

const menuItems: MenuItem[] = [
    {
        icon: Home,
        label: 'Dashboard',
        href: '/dashboard'
    },
    {
        icon: BookOpen,
        label: 'Books',
        href: '/books'
    },
    {
        icon: FileText,
        label: 'Notes',
        href: '/notes'
    },
    {
        icon: FolderIcon,
        label: 'Folders',
        href: '/folders'
    },
    {
        icon: ShoppingBag,
        label: 'Shopping',
        href: '/shopping'
    },
    {
        icon: Gift,
        label: 'Gifts',
        href: '/gifts'
    },
    {
        icon: Settings,
        label: 'Settings',
        href: '/settings'
    }
];

export function MainSidebar() {
    const pathname = usePathname();

    return (
        <ScrollArea className='h-[calc(100vh-3.5rem)]'>
            <div className='space-y-1 p-2'>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Button
                            key={item.href}
                            variant='ghost'
                            asChild
                            className={cn(
                                'w-full justify-start',
                                isActive && 'bg-primary/5 text-primary hover:bg-primary/10'
                            )}>
                            <Link href={item.href}>
                                <Icon className='mr-2 h-4 w-4' />
                                {item.label}
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </ScrollArea>
    );
}
