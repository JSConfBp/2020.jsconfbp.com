import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const SponsorImage = ({ image, alt, href, className = '' }) => (
  <StaticQuery
    query={graphql`
      query sponsorImgQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/static/sponsors/" } }
        ) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    `}
    render={(data) =>
      data.source.edges
        .filter(({ node }) => {
          const {
            images: {
              fallback: { src },
            },
          } = node.childImageSharp.gatsbyImageData
          return src.includes(image)
        })
        .map(({ node }, i) => {
          return (
            <a href={href} key={image ?? 'sponsor-image'} className={className}>
              <GatsbyImage
                as="span"
                alt={alt}
                image={node.childImageSharp.gatsbyImageData}
                placeholder="blurred"
              />
            </a>
          )
        })
    }
  />
)
export default SponsorImage
