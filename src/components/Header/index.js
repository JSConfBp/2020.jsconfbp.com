import React from 'react'
import css from './header.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Logo from '../Logo'

export default () => {

/*   const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data); */


  return (<header className={ css.header }>
    <div className={ css.inner }>
      <div className={ css.title }>
        <Logo className={ css.logoSvg } polygonClassName={ css.polygons } />

        <h1 className={ css.jsconfBp }>
          <span className={ css.jsconf }>
            <span className={ css.logo }>JS</span>
            <span className={ css.conf }>Conf</span>
          </span>
          <span className={ css.budapest }>Budapest</span>
        </h1>

        <div className={ css.date }>
          25-26 September
          <span className={ css.year }>
            2020
          </span>
        </div>
      </div>

      <div className={ css.hero }>
        <div className={ css.mask }>
          <div className={ css.content }>
{/*             <Img
              fluid={ data.file.childImageSharp.fluid }
              alt=""
            /> */}
          </div>
        </div>
      </div>

      {/* <nav className={ css.navigation }>
        <ul className={ css.menu }>
          <li><a href="">Tickets</a></li>
          <li><a href="">Speakers</a></li>
          <li><a href="">Sholarship</a></li>
          <li><a href="">Updates</a></li>
          <li><a href="">Venue</a></li>
          <li><a href="">Workshops</a></li>
        </ul>
      </nav>
 */}
    {/* <Link to="/">
      <div className={ css.logo }></div>
    </Link>
 */}
    </div>


{/*
   <div className={ css.line1 }></div>
    <div className={ css.line2 }></div>
    <div className={ css.line3 }></div>
    <div className={ css.line4 }></div>
    <div className={ css.line5 }></div>
     */}
  </header>)
}
