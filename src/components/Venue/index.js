import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import css from './venue.module.scss'

export default props => {

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, absolutePath: {regex: "/venue-hero/i"}}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 1024) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`)


const image = data.allFile.edges[0].node.childImageSharp.fixed

  return (<section className={ css.venue }>

    <div className={ css.inner }>
      <h2 id="Venue">Venue</h2>

      <p>
      <strong>Akvarium klub</strong><br />
      1051 Budapest, Erzsébet tér 12
      </p>

      <p>
      Literally under a pool of water, this great club was our venue in 2016 and 2019. We return in 2021!
      </p>

      <blockquote>
        Akvárium Klub is more than a simple bar: it is a culture center with a wide musical repertoire from mainstream to underground. There is always a good concert and a smashing exhibition, performance, or other event happening here, in a friendly scene, situated right in the city center.

        <a href="https://welovebudapest.com/en/venue/akvarium-klub-1">
          welovebudapest.com
        </a>
      </blockquote>

      <div className={ css.googleMap }>
        <iframe
          title="Venue area map"
          style={{ pointerEvents: 'none' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.565701968758!2d19.052097751378795!3d47.49837330333867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc402a04eee3%3A0x6869564cd433693c!2sAkv%C3%A1rium+Klub!5e0!3m2!1sen!2sus!4v1448264513121"
          width="100%"
          height="340"
          frameBorder="0"
          allowFullScreen=""
        />
      </div>

      <div className={ css.hero }>
        <div className={ css.heroImage }>
          <Img
            className={ css.img }
            fixed={image}
            alt="Gatsby Docs are awesome"
          />
        </div>
        <div className={ css.overlay }></div>
      </div>
    </div>

  </section>)
}
