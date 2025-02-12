import { Brands } from '@/components/brands';
import { Content } from '@/components/content';
import { Features } from '@/components/features';
import { Freelance } from '@/components/freelance';
import { Hero } from '@/components/hero';
import { Revenue } from '@/components/revenue';
import { PageSEO } from '@/components/seo';
import { Templates } from '@/components/templates';
import { Testimonials } from '@/components/testimonials';
import { siteMetadata } from '@/data/site-metadata';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <Hero />
            <Brands />
            <Features />
            <Templates />
            <Revenue />
            <Content />
            <Freelance />
            <Testimonials />
        </>
    );
};

export default Page;
