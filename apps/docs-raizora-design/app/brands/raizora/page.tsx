import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'
import TypographyStyleGuide from '../ketuju/ _components/typography'

export const generateStaticParams = generateStaticParamsFor('mdxPath')
 

 
const Wrapper = useMDXComponents().wrapper
 
export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <TypographyStyleGuide />
    </Wrapper>
  )
}