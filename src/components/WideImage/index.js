import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './wideimage.module.scss'

const WideImage = ({ src, className = '', alt = '' }) => (
  <StaticQuery
    query={graphql`
      query wideImageQuery {
        source: allFile(filter: { sourceInstanceName: { eq: "postimages" } }) {
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
      const classNames = [css.wideimage]

      return data.source.edges
        .filter(({ node }) => {
          const { relativePath } = node
          return relativePath.includes(src)
        })
        .map(({ node }, i) => (
          <div className={classNames.join(' ')} key={`${src}-${i}`}>
            {node.childImageSharp && (
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                className={css.image}
                alt={alt}
              />
            )}
            {!node.childImageSharp && (
              <img className={css.image} src={node.publicURL} alt={alt} />
            )}
            <small className={css.description}>{alt}</small>
          </div>
        ))
    }}
  />
)

export default WideImage
