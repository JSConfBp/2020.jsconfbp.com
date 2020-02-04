import React from 'react'
import css from './header.module.scss'
import Triangles from './triangles'
//import { Link } from 'gatsby'

import Logo from '../Logo'

export default () => (<header className={ css.header }>
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

   {/*  <div className={ css.line1 }></div>
    <div className={ css.line2 }></div>
    <div className={ css.line3 }></div>
    <div className={ css.line4 }></div>
    <div className={ css.line5 }></div> */}
  </header>)

