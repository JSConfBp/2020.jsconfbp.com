import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './speaker-image.module.scss'

const SpeakerImage = ({ src, className = '', alt = '' }) => (
  <StaticQuery
    query={graphql`
      query speakerImageQuery {
        source: allFile(
          filter: { sourceInstanceName: { eq: "speakerimages" } }
        ) {
          edges {
            node {
              extension
              absolutePath
              relativePath
              dir
              publicURL
              childImageSharp {
                gatsbyImageData(width: 920, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return data.source.edges
        .filter(({ node }) => node?.relativePath.includes(src))
        .map(({ node }, i) => (
          <div className={css.speaker_image} key={`${src}-${i}`}>
            <div className={css.image}>
              {node.childImageSharp && (
                <GatsbyImage
                  image={node.childImageSharp.gatsbyImageData}
                  className={css.image_data}
                  alt={alt}
                />
              )}
              {!node.childImageSharp && (
                <img
                  className={css.image_data}
                  src={node.publicURL}
                  alt={alt}
                />
              )}
            </div>
          </div>
        ))
    }}
  />
)

export default SpeakerImage
