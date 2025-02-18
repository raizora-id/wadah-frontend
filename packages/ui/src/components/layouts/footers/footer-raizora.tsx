import { Button } from '../../base/button';
import React from 'react';

const footerLinks = [
    {
        title: 'Services',
        links: ['Car Rentals', 'Insurance Options', 'Corporate Rentals', 'Special Offers', 'FAQs']
    },
    {
        title: 'Resources',
        links: [
            'Help Center',
            'Privacy Policy',
            'Terms of Service',
            'Accessibility',
            'Vehicle Guides',
            'Customer Testimonials'
        ]
    },
    {
        title: 'Company',
        links: ['About', 'Contact Us', 'Blog', 'Partners', 'Customers', 'Careers', 'Press']
    },
    {
        title: 'Social',
        links: ['Youtube', 'Twitter', 'Instagram', 'Facebook']
    }
];

export type SiteFooterProps = {
    logoLink: React.ReactElement
}

export function SiteFooterRaizora({logoLink}: SiteFooterProps) {

    return (
        <footer className='border-t border-black/[0.06] py-12'>
            <div className='mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-5xl'>
                <div className='grid grid-cols-12 items-start justify-center gap-y-11'>
                    <div className='col-span-full md:col-span-3'>
                        {logoLink}
                    </div>
                    <nav className='col-span-full grid grid-cols-12 gap-x-6 gap-y-11 md:col-span-9'>
                        {footerLinks.map((section) => (
                            <ul key={section.title} className='col-span-6 flex flex-col gap-3 md:col-span-3 lg:gap-3'>
                                <div className='pb-1.5'>
                                    <h2 className='leading-none font-semibold text-balance whitespace-nowrap text-neutral-950'>
                                        {section.title}
                                    </h2>
                                </div>
                                {section.links.map((link) => (
                                    <li key={link} className='text-neutral-600'>
                                        <Button
                                            variant={'link'}
                                            className='h-auto rounded-none p-0 text-[13px] leading-none font-normal text-balance sm:text-sm'
                                            asChild>
                                            <a href={link} target='_blank' rel='noreferrer'>
                                                {link}
                                            </a>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </nav>
                    <div className='col-span-full'>
                        <p className='text-[13px] leading-6 text-neutral-600 sm:text-sm'>
                            Copyright 2025 © All Right Reserved by{' '}
                            <Button
                                variant={'link'}
                                className='h-auto rounded-none p-0 text-[13px] leading-none font-normal sm:text-sm'
                                asChild>
                                <a href={"https://raizora.com"} target='_blank' rel='noreferrer'>
                                    <strong>Raizora</strong>
                                </a>
                            </Button>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
