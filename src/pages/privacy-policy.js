import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/index'
//import styles from './simpletext.module.scss'

const PrivacyPolicy = () => (
  <Layout
    title="Privacy Policy"
    pathName="/privacy-policy"
  >
    <div
      dangerouslySetInnerHTML={{
        __html: require('../gdpr/privacy-policy.json').content,
      }}
    />
  </Layout>
)

export default PrivacyPolicy
