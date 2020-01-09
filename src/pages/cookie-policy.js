import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/index'

const CookiePolicy = () => (
  <Layout title="Cookie Policy" pathName="/cookie-policy">
    <div
      dangerouslySetInnerHTML={{
        __html: require('../gdpr/cookie-policy.json').content,
      }}
    />
  </Layout>
)

export default CookiePolicy
