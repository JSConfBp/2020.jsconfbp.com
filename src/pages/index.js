import React from 'react'

import { Link } from 'gatsby'

import UpdatesList from '../components/UpdatesList'
import Youtube from '../components/Youtube'
import Layout from '../components/Layout'
import Button from '../components/Button'
import css from './index.module.scss'

const IndexPage = props => (
  <Layout pathName="/" mainClassName={ css.home } footerClassName={ css.footer }>
    {/* <div className={'index-logo'}></div> */}
{/*

    <Button
      block
      useLink
      to={'/call-for-speakers'}
      color="purple"
      className={'tickets'}
    >
      Submit your talk!
    </Button> */}

    <UpdatesList />
{/*
    <div className="impression_video">
      <Youtube src="oWmPuKDiRV4" />
    </div>
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
 */}


  </Layout>
)

export default IndexPage
