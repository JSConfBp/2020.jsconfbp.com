import React from 'react'
import UpdatesList from '../components/UpdatesList'
import SpeakerList from '../components/SpeakerList'
import SponsorList from '../components/SponsorList'
import Venue from '../components/Venue'
import Layout from '../components/Layout'
import * as css from './index.module.scss'

const IndexPage = (props) => (
  <Layout pathName="/" mainClassName={css.home} footerClassName={css.footer}>
    <SpeakerList />
    <SponsorList />
    <UpdatesList />
    <Venue />
  </Layout>
)

export default IndexPage
