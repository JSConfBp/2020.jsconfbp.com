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
            <Link to={'/about'}>About Us</Link>
          </li>
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
            <Link to={'/impressum'}>Impressum</Link>
          </li>
          <li>
            <a href="https://twitter.com/jsconfbp">@jsconfbp</a>
          </li>
        </ul>
      </nav>

      <Link to={'/'}>
        <Logo className={ css.logo } polygonClassName={ css.logoFill } />
      </Link>
      <small className={ css.jsconfbp }>JSConf Budapest</small>
      <nav>
        <ul className={classnames("unstyled", css.years)}>
        <li>
            <a href="https://2015.jsconfbp.com">2015</a>
          </li>
          <li>
            <a href="https://2016.jsconfbp.com">2016</a>
          </li>
          <li>
           <a href="https://2017.jsconfbp.com">2017</a>
          </li>
          <li>
            <a href="https://2019.jsconfbp.com">2019</a>
          </li>
        </ul>
      </nav>
    </section>
  </footer>
)
