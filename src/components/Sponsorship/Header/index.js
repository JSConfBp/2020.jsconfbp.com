import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = () => (
  <div className={styles.sponsor_header}>
    <div className={styles.block_inner}>
      <h1 className={styles.title}>
        <Link to={ "/" }>
          <span className={styles.jsconf} />
          JSConf Budapest 2021
          <br />
          Sponsorship
        </Link>
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a href="#Packages">Packages</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#Perks">Perks</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#Workshops">Workshops</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#Reach">Our Reach</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
