import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PersonImage from '../PersonImage'

const SpeakerImage = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query mcImageQuery {
      source: allFile(filter: { sourceInstanceName: { eq: "mcimages" } }) {
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

  return (
    <PersonImage
      edges={data.source.edges.filter(({ node }) =>
        node?.relativePath.includes(src)
      )}
      {...props}
    />
  )
}

export default SpeakerImage
