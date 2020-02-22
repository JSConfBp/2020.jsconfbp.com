import React from 'react'
import UpdatesList from '../components/UpdatesList'
import Layout from '../components/Layout'
import css from './index.module.scss'

const IndexPage = props => (
  <Layout pathName="/" mainClassName={ css.home } footerClassName={ css.footer }>
    <UpdatesList />
  </Layout>
)

export default IndexPage
