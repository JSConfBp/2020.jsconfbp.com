import React from 'react'

import { Link } from 'gatsby'

import UpdatesList from '../components/UpdatesList'
import Youtube from '../components/Youtube'
import Layout from '../components/Layout'
import Button from '../components/Button'
import './index.scss'

const IndexPage = props => (
  <Layout skipHeader pathName="/">
    {/* <div className={'index-logo'}></div> */}

    <div className="impression_video">
      <Youtube src="oWmPuKDiRV4" />
    </div>


    <h1 className={'title'}>JSConf Budapest 2020</h1>
    <h2 className={'title'}>September 24-25</h2>

    <Button
      block
      useLink
      to={'/call-for-speakers'}
      color="purple"
      className={'tickets'}
    >
      Submit your talk!
    </Button>

    <Button
      href="https://ti.to/jsconf-bp/jsconf-budapest-2020"
      block
      fill
      color="purple"
      className={'tickets'}
    >
      Buy tickets from €205
    </Button>

    <p className={'info'}>
      <a href="https://2015.jsconfbp.com/">2015</a> ∙{' '}
      <a href="https://2016.jsconfbp.com/">2016</a> ∙{' '}
      <a href="https://2017.jsconfbp.com/">2017</a> ∙{' '}
      <a href="https://2019.jsconfbp.com/">2019</a>
    </p>

    <p className={'info'}>
      Have questions, <Link to={'/sponsorship'}>wish to sponsor us</Link>? Let us know:
      <br /> <a href="mailto:team@jsconfbp.com">team@jsconfbp.com</a>
    </p>

    <UpdatesList />


  </Layout>
)

export default IndexPage
