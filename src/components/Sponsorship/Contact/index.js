import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as css from './contact.module.scss'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: { sourceInstanceName: { eq: "team-pics" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const images = {
    nec: data.allFile.edges.find((edge) =>
      edge.node.childImageSharp.fluid.src.includes('nec')
    ),
    dani: data.allFile.edges.find((edge) =>
      edge.node.childImageSharp.fluid.src.includes('daniel')
    ),
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
              <Img
                fluid={images.nec.node.childImageSharp.fluid}
                alt="Szabolcs"
              />
            </div>
            Szabolcs Szabolcsi-Toth
          </div>

          <div className={css.team_member}>
            <div className={css.photo}>
              <Img
                fluid={images.dani.node.childImageSharp.fluid}
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
