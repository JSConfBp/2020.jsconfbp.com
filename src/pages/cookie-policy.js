import React from 'react'
import Helmet from 'react-helmet'

const CookiePolicy = () => (
  <>
    <Helmet title={'Cookie Policy | JSConf Budapest'} />

    <div
      dangerouslySetInnerHTML={{
        __html: require('../gdpr/cookie-policy.json').content,
      }}
    />
  </>
)

export default CookiePolicy
