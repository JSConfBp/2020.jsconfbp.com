import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import Logo from '../Logo'
import css from './footer.module.scss'

export default ({ className = '' }) => (
  <footer className={ classnames(className ,css.footer) }>
    <section>
    <p>JSConf Budapest welcomes everybody, please be nice to each other.</p>
    <nav>
      <ul className="unstyled">
        <li>
          <Link to={'/code-of-conduct'}>Code of Conduct</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={'/sponsorship'}>Sponsorship</Link>
        </li>
        <li>
          <a href="https://twitter.com/jsconfbp">@jsconfbp</a>
        </li>
      </ul>
    </nav>

    <Link to={'/'}><Logo className={ css.logo } polygonClassName={ css.logoFill } /></Link>
    <small>JSConf Budapest 2020</small>
    </section>
  </footer>
)
