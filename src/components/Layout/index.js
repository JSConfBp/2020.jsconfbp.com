import React from 'react'
import PropTypes from 'prop-types'
import Meta from '../Meta'
import GuideLines from '../GuideLines'
import css from './layout.module.scss'

import Footer from '../Footer/'
import Header from '../Header/'

export default ({
  title = '',
  description = '',
  pathName,
  mainClassName = '',
  footerClassName = '',
  headerClassName = '',
  skipHeader = false,
  children,
}) => (
  <div className={ css.layout }>
    {!skipHeader && <Header className={ headerClassName} />}
    <Meta title={title} description={description} pathName={pathName} />
    <main className={[ mainClassName, css.main].join(' ')}>{children}</main>
    <Footer className={ footerClassName} />
    {/* <GuideLines /> */}
  </div>
)
