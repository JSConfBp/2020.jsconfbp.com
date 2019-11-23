
import React from 'react'
import { Link } from 'gatsby'

import css from './footer.module.scss'

export default () => (
  <footer className={css.footer}>
    <nav>
      <ul>
        <li>
          <Link to={'/code-of-conduct'}>Code of Conduct</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  </footer>
)

