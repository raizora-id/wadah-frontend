import type React from 'react';

interface ContentLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export function ContentLayout({ title, subtitle, children }: ContentLayoutProps) {
    return (
        <div className='h-full'>
            <div className='flex h-14 items-center justify-between border-b px-4'>
                <div>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    {subtitle && <p className='text-muted-foreground text-sm'>{subtitle}</p>}
                </div>
            </div>
            <div className='p-4'>{children}</div>
        </div>
    );
}
