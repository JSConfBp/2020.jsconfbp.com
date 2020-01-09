import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import PostImage from '../components/PostImage'
import Layout from '../components/Layout'
import SocialMeta from '../components/SocialMeta/index'

import './updates.scss'

const shortcodes = { PostImage }

function UpdatesContentTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.lead}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
      />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default UpdatesContentTemplate

export const pageQuery = graphql`
  query($id: String!) {
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
