import React from 'react'
import UpdatesList from '../components/UpdatesList'
import Venue from '../components/Venue'
import Layout from '../components/Layout'
import css from './index.module.scss'

const IndexPage = props => (
  <Layout pathName="/" mainClassName={css.home} footerClassName={css.footer}>
    <UpdatesList />
    <Venue />
  </Layout>
)

export default IndexPage
