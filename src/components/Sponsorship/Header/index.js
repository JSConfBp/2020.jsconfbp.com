import React from 'react'
import { Link } from 'gatsby'
import * as css from './header.module.scss'

const Header = () => (
  <div className={css.sponsor_header}>
    <div className={css.block_inner}>
      <h1 className={css.title}>
          <span className={css.jsconf} />
          JSConf Budapest 2022
          <br />
          Sponsorship
      </h1>

      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <a href="#Attendees">Attendees</a>
          </li>
          <li className={css.nav_item}>
            <a href="#Reach">Reach</a>
          </li>
          <li className={css.nav_item}>
            <a href="#Packages">Packages</a>
          </li>
          <li className={css.nav_item}>
            <a href="#Perks">Perks</a>
          </li>
          <li className={css.nav_item}>
            <a href="#Workshops">Workshops</a>
          </li>
          <li className={css.nav_item}>
            <a href="#Scholarships">Scholarship support</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
