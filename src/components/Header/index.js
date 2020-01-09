import React from 'react'
import './header.scss'
import { Link } from 'gatsby'

export default () => (
  <header className="header">
    <Link to="/">
      <div className="logo"></div>
    </Link>

    {/* <h1>JSConf Budapest 2020</h1>
        <h2>September 24-25</h2> */}
  </header>
)
