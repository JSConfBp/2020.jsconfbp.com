
import React from 'react'
import { Link } from 'gatsby'

import  './footer.scss'

export default () => (
  <footer className={"footer"}>
    <nav>
      <ul className="unstyled">
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

