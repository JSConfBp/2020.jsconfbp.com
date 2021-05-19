import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const SponsorImage = ({ image, alt, className = '' }) => (
  <StaticQuery
    query={graphql`
      query sponsorImgQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/static/sponsors/" } }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return data.source.edges
        .filter(({ node }) => {
          const {
            images: {
              fallback: { src },
            },
          } = node.childImageSharp.gatsbyImageData

          return src.includes(image)
        })
        .map(({ node }, i) => (
          <GatsbyImage
            alt={alt}
            image={node.childImageSharp.gatsbyImageData}
            className={className}
            key={image}
          />
        ))
    }}
  />
)
export default SponsorImage
