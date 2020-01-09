import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './contact.module.scss'

export default () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: { sourceInstanceName: { eq: "team-pics" } })
      {
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
    nec: data.allFile.edges.find(edge => edge.node.childImageSharp.fluid.src.includes('nec')),
    dani: data.allFile.edges.find(edge => edge.node.childImageSharp.fluid.src.includes('daniel')),
  }

  console.log(images);

  return (
  <div className={styles.contact}>
    <div className={styles.block_inner}>
      <h2>Let's talk</h2>

      <h3>
        As a non-profit conference, we are always looking for sponsors to make
        our events awesome.
      </h3>

      <div className={styles.contacts}>
        <div className={styles.team_member}>
          <div className={styles.photo}>
          <Img
              fluid={images.nec.node.childImageSharp.fluid}
              alt="Szabolcs"
            />
          </div>
          Szabolcs Szabolcsi-Toth
        </div>

        <div className={styles.team_member}>
          <div className={styles.photo}>
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
        className={styles.button}
      >
        Contact Us
      </a>
    </div>
  </div>
)}


