import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './sponsorgallery.module.scss'

// const random = (min, max) => Math.floor(Math.random() * max) + min
const images = [
  ['48874115243', '48874134593', '48874134803', '48874661891', '48874143948'],
  ['48874149958', '48874678641', '48874150418', '48874647261', '48874112928'],
  ['48874682181', '48874844677', '48874682686', '48874109138', '48874840117'],
  ['48874845207', '48874858827', '48874866037', '48874878927'],
]

const Image = ({ image, link, alt }) => (
  <a
    href={link}
    style={{ '--aspectRatio': image.width / image.height }}
    className={css.gallery_item}
  >
    <GatsbyImage alt={alt} image={image} key={image} />
  </a>
)

const SponsorGallery = () => {
  const data = useStaticQuery(graphql`
    query SponsorGalleryQuery {
      allFile(filter: { sourceInstanceName: { eq: "sponsor-gallery" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
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
          const {
            images: {
              fallback: { src },
            },
          } = edge.node.childImageSharp.gatsbyImageData

          return src.includes(img)
        })

        const link = `https://www.flickr.com/photos/jsconfbp/${img}`
        return (
          <Image
            alt="Highlights of JSConf Budapest 2019"
            image={imgData.node.childImageSharp.gatsbyImageData}
            link={link}
            key={`image-${i}`}
          />
        )
      })}
    </div>
  )
}

export default SponsorGallery
