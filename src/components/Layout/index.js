import React from 'react'
import PropTypes from 'prop-types'
import Meta from '../Meta'
import GuideLines from '../GuideLines'
import './layout.scss'

import Footer from '../Footer/'
import Header from '../Header/'

const Layout = ({
  title = '',
  description = '',
  pathName,
  className,
  skipHeader = false,
  children,
}) => (
  <div className={'layout'}>
    {/* <GuideLines /> */}
    {!skipHeader && <Header />}
    <Meta title={title} description={description} pathName={pathName} />
    <main className={['main', className].join(' ')}>{children}</main>
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
