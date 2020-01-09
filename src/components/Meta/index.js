import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import SocialMeta from '../SocialMeta'

const SiteMetadata = ({ title, description, pathName, image }) => {
  const query = graphql`
    query MetaQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: { siteUrl, title: siteTitle, description: siteDescription },
    },
  } = useStaticQuery(query)

  const canonical = `${siteUrl}${pathName}`
  return (
    <>
      <Helmet
        defer={false}
        defaultTitle={siteTitle}
        titleTemplate={`%s | ${title}`}
      >
        <html lang="en" />

        <link rel="canonical" href={canonical} />
        <meta name="description" content={description || siteDescription} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
      </Helmet>
      <Helmet title={title} />
      <SocialMeta
        title={title || siteTitle}
        description={description || siteDescription}
        image={image}
        href={canonical}
      />
    </>
  )
}

export default SiteMetadata
