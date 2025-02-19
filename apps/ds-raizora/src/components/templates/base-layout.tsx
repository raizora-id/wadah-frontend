import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import { appConfig } from '@/config/app';
import ReactQueryProvider from '@/providers/react-query-provider';
import { Toaster } from '@packages/ui/components/base/toaster';
import '@packages/ui/globals.css';

const geistSans = localFont({
    src: '../../../src/app/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});

const geistMono = localFont({
    src: '../../../src/app/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: appConfig.appName,
    description: appConfig.description
};

const GuestLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
};

export default GuestLayout;
