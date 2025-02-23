import React from 'react';

import { Features } from '@/components/features';
import Footer from '@/components/footer';
import LogoIntro from '@/components/logo-intro';
import { Revenue } from '@/components/revenue';
import { PageSEO } from '@/components/seo';
import { Templates } from '@/components/templates';
import { Testimonials } from '@/components/testimonials';
import { siteMetadata } from '@/data/site-metadata';
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
                <div className='bg-red flex max-w-6xl items-center p-4 px-12 pt-72'>
                    <TextGradientScroll
                        className='text-5xl'
                        text='Setiap momen berharga memiliki ceritanya sendiri - seperti kepingan mozaik yang membentuk kenangan tak terlupakan. Dihadiri, kami percaya bahwa setiap undangan adalah jembatan yang menghubungkan hati dengan hati, menganyam kebersamaan dalam lembar digital yang memukau. Dari perayaan kehidupan hingga momen pencapaian, kami hadir untuk mengubah setiap kesempatan istimewa Anda menjadi pengalaman digital yang mengundang decak kagum. Karena kami yakin, ketika cerita Anda dikisahkan dengan indah, setiap undangan menjadi awal dari sebuah kenangan yang akan selalu dikenang.'
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
