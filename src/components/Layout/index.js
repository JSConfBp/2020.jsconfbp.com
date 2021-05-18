import React from 'react'
import Meta from '../Meta'
import Footer from '../Footer/'
import Header from '../Header/'

import * as css from './layout.module.scss'

const Layout = ({
  pathName,
  title = '',
  description = '',
  image,
  mainClassName = '',
  footerClassName = '',
  headerClassName = '',
  skipHeader = false,
  children,
}) => (
  <div className={css.layout}>
    {!skipHeader && <Header className={headerClassName} pathName={pathName} />}
    <Meta
      title={title}
      description={description}
      pathName={pathName}
      image={image}
    />

    <main className={[mainClassName, css.main].join(' ')}>{children}</main>

    <Footer className={footerClassName} />
  </div>
)

export default Layout
