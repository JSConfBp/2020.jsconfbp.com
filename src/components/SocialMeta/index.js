import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const SocialMeta = ({
  title,
  description,
  href = '',
  image = 'jsconfbp_2022.jpg',
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

  const canonical = `${siteUrl}${href}`

  return (
    <Helmet
      meta={[
        {
          name: 'description',
          content: description ?? siteDescription,
        },

        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title ?? siteTitle },
        { property: 'og:description', content: description ?? siteDescription },
        { property: 'og:site_name', content: siteTitle },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: `${siteUrl}/social/${image}` },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: siteTitle },
        { name: 'twitter:creator', content: twitter },
        { name: 'twitter:title', content: title ?? siteTitle },
        {
          name: 'twitter:description',
          content: description ?? siteDescription,
        },
        { name: 'twitter:url', content: canonical },
        { name: 'twitter:image', content: `${siteUrl}/social/${image}` },
      ]}
    />
  )
}

export default SocialMeta
