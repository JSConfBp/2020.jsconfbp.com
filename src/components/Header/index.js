import React from 'react'
import css from './header.module.scss'
import { Link } from 'gatsby'

import Logo from '../Logo'

export default () => (
  <header className={ css.header }>
    <div className={ css.inner }>
      <div className={ css.title }>

        <h1 className={ css.mainTitle }>
          <span className={ css.jsconf }>

            <Logo className={ css.logoSvg } />

            <span className={ css.logo }>JS</span>Conf
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

      </nav>

    {/* <Link to="/">
      <div className={ css.logo }></div>
    </Link>
 */}
    </div>
  </header>
)
