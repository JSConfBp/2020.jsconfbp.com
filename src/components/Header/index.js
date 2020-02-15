import React from 'react'
import css from './header.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Logo from '../Logo'

export default () => {

  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      source: allFile(
        filter: {sourceInstanceName: {eq: "images"},
        relativePath: {in: "hero.jpg"}}
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const { fluid } = data.source.edges[0].node.childImageSharp;

  return (<header className={ css.header }>
    <div className={ css.inner }>
      <div className={ css.title }>
        <Link to={"/"}>
          <Logo className={ css.logoSvg } polygonClassName={ css.polygons } />
        </Link>

        <h1 className={ css.jsconfBp }>
          <Link to={"/"}>
            <span className={ css.jsconf }>
              <span className={ css.logo }>JS</span>
              <span className={ css.conf }>Conf</span>
            </span>
            <span className={ css.budapest }>Budapest</span>
          </Link>
        </h1>

        <div className={ css.date }>
          25-26 September
          <span className={ css.year }>
            2020
          </span>
        </div>
      </div>


      <div className={ css.hero }>
        <div className={ css.cta }>
          <a href="https://ti.to/jsconf-bp/jsconf-budapest-2020" className={ css.button }>
            Buy Tickets
            <small>Starting from €205</small>
          </a>
        </div>

        <div className={ css.mask }>
          <div className={ css.content }>
            {/* <Img
              className={ css.image }
              fluid={ fluid }
              alt=""
            /> */}
            <video autoPlay loop muted playsInline className={ css.heroContent }>
              <source src="/video/hero-1.webm" type="video/webm" />
              <source src="/video/hero-1.mp4" type="video/mp4" />
            </video>
            {/* <div className={ css.overlay }></div>
            <div className={ css.shadow }></div> */}
          </div>
        </div>
      </div>

      <input
        id="MobileMenuTrigger"
        type="checkbox"
        className={ css.triggerCheckbox } aria-hidden="true" />
      <nav className={ css.navigation }>
        <ul className={ css.menu }>
          <li><Link to={ "/call-for-speakers" }>Call for Speakers</Link></li>
          <li><Link to={ "/" }>Sponsorship</Link></li>
          <li><Link to={ "/" }>Updates</Link></li>
          <li><Link to={ "/" }>Scholarship</Link></li>
          <li><Link to={ "/code-of-conduct" }>Code of Conduct</Link></li>
        </ul>
      </nav>
      <label
        htmlFor="MobileMenuTrigger"
        className={ css.mobileMenuTrigger }
        aria-hidden="true"><span>Open Menu</span></label>
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
