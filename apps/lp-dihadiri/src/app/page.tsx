import { Brands } from '@/components/brands';
import { Content } from '@/components/content';
import { Features } from '@/components/features';
import Footer from '@/components/footer';
import { Freelance } from '@/components/freelance';
import { Hero } from '@/components/hero';
import LogoIntro from '@/components/logo-intro';
import { Revenue } from '@/components/revenue';
import { PageSEO } from '@/components/seo';
import { Templates } from '@/components/templates';
import { Testimonials } from '@/components/testimonials';
import { siteMetadata } from '@/data/site-metadata';
import { TextAnimate } from '@packages/ui/components/motions/text-animate';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className='flex items-center justify-center p-4 pt-12'>
                <TextAnimate
                    animation='blurInUp'
                    by='character'
                    once
                    className='font-size[12rem] text-xl font-semibold'>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.
                </TextAnimate>
            </div>
            <LogoIntro />
            <Features />
            <Templates />
            <Revenue />
            <Content />
            <Freelance />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Page;
