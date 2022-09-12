import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import * as css from './header.module.scss'
import { Link } from 'gatsby'
import Logo from '../Logo'

const Header = ({ pathName }) => {
  const [videoSource, setVideoSource] = useState('')
  const [autoPlay, setAutoPlay] = useState('')
  const [isHomePage, setIsHomePage] = useState(pathName === '/')

  const DecorVideoSource = () => (
    <>
      <source src="/video/hero-2.webm" type="video/webm" />
      <source src="/video/hero-2.mp4" type="video/mp4" />
    </>
  )

  useEffect(() => {
    const onHomePage = pathName === '/'

    const connection = navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection || { effectiveType: '4g' }
    const isFastNetwork = !/[23]g/.test(connection.effectiveType)

    const allowMotion = !matchMedia('(prefers-reduced-motion)').matches

    setIsHomePage(onHomePage)
    // not happy, but
    if (window.innerWidth > 480 && isFastNetwork) {
      setVideoSource(<DecorVideoSource />)
      setAutoPlay(onHomePage && allowMotion)
    }
  }, [pathName])

  const DecorVideo = ({ source, autoPlay }) => (
    <video
      autoPlay={autoPlay}
      loop
      muted
      playsInline
      className={css.heroContent}
      poster="/video/hero-poster.jpg"
    >
      {source}
    </video>
  )

  return (
    <header className={classnames(css.header, !isHomePage && css.subpage)}>
      <div className={css.inner}>
        <div className={css.title}>
          <Link to={'/'}>
            <Logo className={css.logoSvg} polygonClassName={css.polygons} />
          </Link>

          <h1 className={css.jsconfBp}>
            <Link to={'/'}>
              <span className={css.jsconf}>
                <span className={css.logo}>JS</span>
                <span className={css.conf}>Conf</span>
              </span>
              <span className={css.budapest}>Budapest</span>
            </Link>
          </h1>

          <div className={css.date}>
            2-3 June
            <span className={css.year}>2022</span>
          </div>
        </div>

        <div className={css.hero}>
          <div className={css.cta}>
            <span className={css.button}>
              Sold Out
              <small>See you in 2024!</small>
            </span>
          </div>

          <div className={css.mask}>
            <div className={css.content}>
              <DecorVideo source={videoSource} autoPlay={autoPlay} />
              <div className={css.shadow}></div>
            </div>
          </div>
        </div>

        <input
          id="MobileMenuTrigger"
          type="checkbox"
          className={css.triggerCheckbox}
          aria-hidden="true"
        />
        <nav className={css.navigation}>
          <ul className={css.menu}>
            <li>
              <Link to={'/#Speakers'}>Speakers</Link>
            </li>
            <li>
              <Link to={'/updates/schedule'}>Schedule</Link>
            </li>
            <li>
              <Link to={'/scholarships'}>Scholarships</Link>
            </li>
            <li>
              <Link to={'/workshops'}>Workshops</Link>
            </li>
            {/* <li><Link to={ "/" }>Scholarship</Link></li> */}
            <li>
              <Link to={'/code-of-conduct'}>Code of Conduct</Link>
            </li>
          </ul>
        </nav>
        <label
          htmlFor="MobileMenuTrigger"
          className={css.mobileMenuTrigger}
          aria-hidden="true"
        >
          <span>Open Menu</span>
        </label>
      </div>
    </header>
  )
}

export default Header
