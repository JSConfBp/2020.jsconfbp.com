import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as css from './sponsorgallery.module.scss'

// const random = (min, max) => Math.floor(Math.random() * max) + min
const images = [
  ['48874115243', '48874134593', '48874134803', '48874661891', '48874143948'],
  ['48874149958', '48874678641', '48874150418', '48874647261', '48874112928'],
  ['48874682181', '48874844677', '48874682686', '48874109138', '48874840117'],
  ['48874845207', '48874858827', '48874866037', '48874878927'],
]

const Image = ({ image, link }) => (
  <a
    href={link}
    style={{ '--aspectRatio': image.aspectRatio }}
    className={css.gallery_item}
  >
    <Img fluid={image} key={image} />
  </a>
)

export default () => {
  const data = useStaticQuery(graphql`
    query SponsorGalleryQuery {
      allFile(filter: { sourceInstanceName: { eq: "sponsor-gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={css.gallery}>
      {[...images[0], ...images[1]].map((img, i) => {
        const imgData = data.allFile.edges.find((edge) => {
          const image = edge.node.childImageSharp.fluid
          return image.src.includes(img)
        })

        const link = `https://www.flickr.com/photos/jsconfbp/${img}`
        return (
          <Image
            image={imgData.node.childImageSharp.fluid}
            link={link}
            key={`image-${i}`}
          />
        )
      })}
    </div>
  )
}
