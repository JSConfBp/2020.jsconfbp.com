import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import css from './header.module.scss'
import { Link } from 'gatsby'
import Logo from '../Logo'

export default () => {
  const [videoSource, setVideoSource] = useState('')
  const [autoPlay, setAutoPlay] = useState('')
  const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/')

  const DecorVideoSource = () => (<>
    <source src="/video/hero-2.webm" type="video/webm" />
    <source src="/video/hero-2.mp4" type="video/mp4" />
  </>)

  useEffect(() => {
    const home = window.location.pathname === '/'
    setIsHomePage(home)
    // not happy, but
    if (window.innerWidth > 480) {
      setVideoSource(<DecorVideoSource />)
      setAutoPlay(home)
    }
  }, [false])

  const DecorVideo = ({ source, autoPlay }) => (<video
    autoPlay={ autoPlay }
    loop
    muted
    playsInline
    className={ css.heroContent }
    poster="/video/hero-poster.jpg"
  >
    { source }
  </video>)

  return (<header className={ classnames(css.header, !isHomePage && css.subpage) }>
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
            <DecorVideo source={ videoSource } autoPlay={ autoPlay } />
            <div className={ css.shadow }></div>
          </div>
        </div>
      </div>

      <input
        id="MobileMenuTrigger"
        type="checkbox"
        className={ css.triggerCheckbox } aria-hidden="true" />
      <nav className={ css.navigation }>
        <ul className={ css.menu }>
          <li><Link to={ "https://ti.to/jsconf-bp/jsconf-budapest-2020" }>Tickets</Link></li>
          <li><Link to={ "/call-for-speakers" }>Call for Speakers</Link></li>
          <li><Link to={ "/sponsorship" }>Sponsorship</Link></li>
          <li><Link to={ "/#Updates" }>Updates</Link></li>
          {/* <li><Link to={ "/" }>Scholarship</Link></li> */}
          <li><Link to={ "/code-of-conduct" }>Code of Conduct</Link></li>
        </ul>
      </nav>
      <label
        htmlFor="MobileMenuTrigger"
        className={ css.mobileMenuTrigger }
        aria-hidden="true"><span>Open Menu</span></label>
    </div>
  </header>)
}
