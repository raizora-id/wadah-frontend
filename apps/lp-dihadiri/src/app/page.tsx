import React from 'react';

import { Features } from '@/components/features';
import Footer from '@/components/footer';
import LogoIntro from '@/components/logo-intro';
import { Revenue } from '@/components/revenue';
import { PageSEO } from '@/components/seo';
import { Templates } from '@/components/templates';
import { Testimonials } from '@/components/testimonials';
import { siteMetadata } from '@/data/site-metadata';
import { BackgroundGradientAnimation } from '@packages/ui/components/motions/background-gradient-animation';
import TextGradientScroll from '@packages/ui/components/motions/scroll-reveal';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className='flex flex-col items-center'>
                <BackgroundGradientAnimation className='fixed top-0 left-0 z-[-9]' />
                <div className='bg-red flex max-w-6xl items-center p-4 px-12 pt-42 md:pt-72'>
                    <TextGradientScroll
                        className='md:pt2xl text-5xl'
                        text='Setiap momen berharga memiliki ceritanya sendiri - seperti kepingan mozaik yang membentuk kenangan tak terlupakan. dihadiri menjadi bagian dari perayaan kehidupan hingga momen pencapaian, kami hadir untuk mengubah setiap kesempatan istimewa menjadi sebuah cerita yang dikisahkan dengan indah.'
                    />
                </div>
                <LogoIntro />
                <Features />
                <Templates />
                <Revenue />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
};

export default Page;
