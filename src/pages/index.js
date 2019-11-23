import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Button from '../components/Button'
import css from './index.module.scss'

const IndexPage = props => (
  <Layout pathName="/">
    <div className={css.logo}></div>

    <h1 className={css.title}>JSConf Budapest 2020</h1>
    <h2 className={css.title}>September 24-25</h2>

    <Button
      href=""
      block
      color="purple"
      className={css.tickets}
    >
      CFP Opens in December
    </Button>

    <Button
      href="https://ti.to/jsconf-bp/jsconf-budapest-2020"
      block
      fill
      color="purple"
      className={css.tickets}
    >
      Early Bird tickets from €205
    </Button>

    <p className={css.info}>
      <a href="http://2015.jsconfbp.com/">2015</a> ∙{' '}
      <a href="http://2016.jsconfbp.com/">2016</a> ∙{' '}
      <a href="http://2017.jsconfbp.com/">2017</a> ∙{' '}
      <a href="https://2019.jsconfbp.com/">2019</a>
    </p>

    <p className={css.info}>
      Have questions, wish to sponsor us? Let us know:
      <br /> <a href="mailto:team@jsconfbp.com">team@jsconfbp.com</a>
    </p>


  </Layout>
)

export default IndexPage
