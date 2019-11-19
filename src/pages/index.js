import React from 'react'
import { graphql } from 'gatsby'

import Button from '../components/Button'
import './index.scss'

const IndexPage = props => (
  <div className="home">
    <div className="logo"></div>

    <h1>JSConf Budapest 2020</h1>
    <h2>September 24-25</h2>

    <Button
      href="https://ti.to/jsconf-bp/jsconf-budapest-2020"
      block
      fill
      color="purple"
      className="tickets"
    >
      Early Bird tickets from €205
    </Button>

    <p className="info">
      <a href="http://2015.jsconfbp.com/">2015</a> ∙{' '}
      <a href="http://2016.jsconfbp.com/">2016</a> ∙{' '}
      <a href="http://2017.jsconfbp.com/">2017</a> ∙{' '}
      <a href="https://2019.jsconfbp.com/">2019</a>
    </p>

    <p className="info">
      Have questions, wish to sponsor us? Let us know:
      <br /> <a href="mailto:team@jsconfbp.com">team@jsconfbp.com</a>
    </p>


  </div>
)

export default IndexPage
