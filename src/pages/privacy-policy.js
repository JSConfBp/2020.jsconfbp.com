import React from 'react'
import Layout from '../components/Layout/index'

const PrivacyPolicy = () => (
  <Layout title="Privacy Policy" pathName="/privacy-policy">
    <div
      dangerouslySetInnerHTML={{
        __html: require('../gdpr/privacy-policy.json').content,
      }}
    />
  </Layout>
)

export default PrivacyPolicy
