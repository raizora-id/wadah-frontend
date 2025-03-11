import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import siteConfig from '../site.config'
import Image from 'next/image'
 
export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: './favicons/favicon.ico'
  }
};
 
const navbar = (
  <Navbar
    logo={    
      <div className='flex grid grid-row gap-4'>
          <Image
      src="/logo.png"
      width={40}
      height={40}
      alt="Picture of the author"
    /><b>Bungas Design</b>
      </div>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}