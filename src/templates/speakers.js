import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import useHeadingDecorator from '../hooks/useHeadingDecorator'
import PostImage from '../components/PostImage'
import Layout from '../components/Layout'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage/index'

import * as css from './speakers.module.scss'

function SpeakerContentTemplate({ data: { mdx } }) {
  const [getClassName] = useHeadingDecorator()
  const H2 = ({ children }) => {
    return <h2 className={getClassName()}>{children}</h2>
  }

  const shortcodes = {
    PostImage,
    h2: H2,
  }
  const {
    name,
    title,
    image,
    twitter,
    github,
    company,
    location,
    socialCard,
  } = mdx.frontmatter

  return (
    <Layout
      title={ title }
      pathName={`/updates${mdx.fields.slug}`}
    >
      <SocialMeta
        title={ title }
        description={ name }
        image={ socialCard || 'social-card.png'}
        href={`/updates${mdx.fields.slug}`}
      />

      <article className={css.speaker_page}>

        <h2>{ name }</h2>
        <h1>{ title }</h1>

        <div className={css.details}>
          <SpeakerImage src={image} />

          <ul>
            <li>{ image }</li>
            <li>{ twitter }</li>
            <li>{ github }</li>
            <li>{ company }</li>
            <li>{ location }</li>
          </ul>

        </div>

        <section className={css.abstract_bio}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>

      </article>

    </Layout>
  )
}

export default SpeakerContentTemplate

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
        name
        title
        image
        twitter
        github
        company
        location
        socialCard
      }
      body
    }
  }
`
