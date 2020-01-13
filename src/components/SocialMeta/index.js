import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const SocialMeta = ({
  title,
  description,
  href,
  image = 'jsconfbp_2020.jpg',
}) => {
  const query = graphql`
    query SiteSocialMetaQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
          twitter
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        twitter,
        siteUrl,
        description: siteDescription,
      },
    },
  } = useStaticQuery(query)

  return (
    <Helmet
      meta={[
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: title || siteTitle },
        { name: 'og:description', content: description || siteDescription },
        { name: 'og:site_name', content: siteTitle },
        { name: 'og:url', content: href || siteUrl },
        { name: 'og:image', content: `${siteUrl}/social/${image}` },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: siteTitle },
        { name: 'twitter:creator', content: twitter },
        { name: 'twitter:title', content: title || siteTitle },
        {
          name: 'twitter:description',
          content: description || siteDescription,
        },
        { name: 'twitter:url', content: href || siteUrl },
        { name: 'twitter:image', content: `${siteUrl}/social/${image}` },
      ]}
    />
  )
}

export default SocialMeta
