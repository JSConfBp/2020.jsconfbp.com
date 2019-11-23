import React from 'react'
import PropTypes from 'prop-types'
import Meta from '../Meta'

import css from './layout.module.scss'

import Footer from '../Footer/'

//import Header from '../Header/'

const Layout = ({
  title = '',
  description = '',
  pathName,
  className,
  children
}) => (
  <div className={css.layout}>
    <Meta
      title={title}
      description={description}
      pathName={pathName}
    />
    {/* <Header /> */}
    <main className={[css.main, className].join(' ')}>
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainClassNames: PropTypes.array,
}

Layout.defaultProps = {
  mainClassNames: [],
}

export default Layout
