import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './contact.module.scss'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: { sourceInstanceName: { eq: "team-pics" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  const images = {
    nec: data.allFile.edges.find((edge) => {
      const {
        images: {
          fallback: { src },
        },
      } = edge.node.childImageSharp.gatsbyImageData

      return src.includes('nec')
    }),
    dani: data.allFile.edges.find((edge) => {
      const {
        images: {
          fallback: { src },
        },
      } = edge.node.childImageSharp.gatsbyImageData

      return src.includes('daniel')
    }),
  }

  return (
    <div className={css.contact}>
      <div className={css.block_inner}>
        <h2>Let's talk</h2>

        <h3>
          As a non-profit conference, we are always looking for sponsors to make
          our events awesome.
        </h3>

        <div className={css.contacts}>
          <div className={css.team_member}>
            <div className={css.photo}>
              <GatsbyImage
                image={images.nec.node.childImageSharp.gatsbyImageData}
                alt="Szabolcs"
              />
            </div>
            Szabolcs Szabolcsi-Toth
          </div>

          <div className={css.team_member}>
            <div className={css.photo}>
              <GatsbyImage
                image={images.dani.node.childImageSharp.gatsbyImageData}
                alt="Daniel"
              />
            </div>
            Daniel Liptak
          </div>
        </div>

        <a
          href="mailto:team@jsconfbp.com?subject=Sponsorship"
          className={css.button}
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Contact
