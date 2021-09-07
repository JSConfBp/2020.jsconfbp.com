import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { useHeadingDecorator } from '../hooks/useHeadingDecorator'
import PostImage from '../components/PostImage'
import Layout from '../components/Layout'
import SocialMeta from '../components/SocialMeta/index'

import './updates.scss'

function UpdatesContentTemplate({ data: { mdx } }) {
  const [getClassName] = useHeadingDecorator()
  const H2 = ({ children }) => {
    return <h2 className={getClassName()}>{children}</h2>
  }

  const shortcodes = {
    PostImage,
    h2: H2,
  }

  return (
    <Layout
      title={mdx.frontmatter.title}
      pathName={`/updates${mdx.fields.slug}`}
    >
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.lead}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
        href={`/updates${mdx.fields.slug}`}
      />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default UpdatesContentTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          relativePath
        }
      }
      fields {
        slug
      }
      frontmatter {
        title
        lead
        socialCard
      }
      body
    }
  }
`
