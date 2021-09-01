import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './speaker-image.module.scss'

const SpeakerImage = ({
  src,
  alt = '',
  color = 'orange',
  turn = 'up',
  className = '',
}) => {
  const data = useStaticQuery(graphql`
    query speakerImageQuery {
      source: allFile(filter: { sourceInstanceName: { eq: "speakerimages" } }) {
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
  `)

  return data.source.edges
    .filter(({ node }) => node?.relativePath.includes(src))
    .map(({ node }, i) => (
      <div
        className={classnames(css.speaker_image, css[color], className)}
        key={`${src}-${i}`}
      >
        <div className={classnames(css[turn], css.image)}>
          {node.childImageSharp && (
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              className={css.image_data}
              alt={alt}
            />
          )}
          {!node.childImageSharp && (
            <img className={css.image_data} src={node.publicURL} alt={alt} />
          )}
        </div>
      </div>
    ))
}

export default SpeakerImage
