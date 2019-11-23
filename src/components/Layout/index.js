import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import css from './layout.module.scss'

import Footer from '../Footer/'

//import Header from '../Header/'

const MainLayout = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => (
      <div className={css.layout}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header /> */}
        <main className={[css.main, ...props.mainClassNames].join(' ')}>
          {props.children}
        </main>
        <Footer />
      </div>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  mainClassNames: PropTypes.array,
}

MainLayout.defaultProps = {
  mainClassNames: [],
}

export default MainLayout
