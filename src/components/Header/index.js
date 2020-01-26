import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import css from './header.module.scss'
import Triangles from './../Triangles'
//import { Link } from 'gatsby'

import Logo from '../Logo'


const marquee = (source, current, marqueeDirection, setMarqueeDirection) => {
  let direction = marqueeDirection
  if (marqueeDirection < 0 && current.length === 0) {
    direction = 1
    setMarqueeDirection(1)
  }

  if (marqueeDirection > 0 && current.length == source.length) {
    direction = -1
    setMarqueeDirection(-1)
  }

  if (direction > 0) {
    return current + source.charAt(current.length)
  } else {
    return current.slice(0,-1)
  }

}


export default () => {

  const [triangleText, setTriangleText] = useState('')
  const [marqueeDirection, setMarqueeDirection] = useState(1)

  const text = 'JSConf Budapest 2020, 24-25 September 2020 - Cfp is open until the end of February'

  useEffect(() => {
    let interval

    const writer = () => {
      const newtext = marquee(text, triangleText, marqueeDirection, setMarqueeDirection)
      setTriangleText(newtext);
    }

    interval = setTimeout(writer, 500)

    return () => {
      clearTimeout(interval)
    }
  }, [triangleText])

  return (<header className={ css.header }>
    <div className={ css.inner }>
      <div className={ css.title }>
        <Logo className={ css.logoSvg } polygonClassName={ css.polygons } />

        <h1 className={ css.mainTitle }>
          <span className={ css.jsconf }>
            <span className={ css.logo }>JS</span>
            <span className={ css.conf }>Conf</span>
          </span>
          <span className={ css.city }>Budapest</span>
        </h1>

        <div className={ css.date }>
          25-26 September
          <span className={ css.year }>
            2020
          </span>
        </div>

      </div>
      <nav className={ css.navigation }>
        <ul className={ css.menu }>
          <li><a href="">Tickets</a></li>
          <li><a href="">Speakers</a></li>
          <li><a href="">Sholarship</a></li>
          <li><a href="">Updates</a></li>
          <li><a href="">Venue</a></li>
          <li><a href="">Workshops</a></li>
        </ul>
      </nav>

    {/* <Link to="/">
      <div className={ css.logo }></div>
    </Link>
 */}
    </div>

    <Triangles
      text={ triangleText }
      width={ 800 }
      height={ 800 }
      className={ classnames(css.background, css.bottomRight) }
      edgeSize={80}
      start={ 'top right' }
    />

    <div className={ css.line1 }></div>
    <div className={ css.line2 }></div>
    <div className={ css.line3 }></div>
    <div className={ css.line4 }></div>
    <div className={ css.line5 }></div>
  </header>)
}
