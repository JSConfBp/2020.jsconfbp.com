import React from 'react'
import Layout from '../components/Layout'

const Covid = () => (
  <Layout
    title="Hungarian COVID-19 travel guidelines and crossing the border"
    pathName="/covid"
    image="covid-guidelines.png"
  >
    <h1>Hungarian COVID-19 travel guidelines and crossing the border</h1>
    <p>
      Last updated at: <strong>April 9, 2022.</strong>
    </p>
    <p><em>
      Our government is constantly monitoring the COVID-19 pandemic situation
      and legislation around travel is constantly changing.{' '}
      <strong>We will keep this page up-to-date</strong> as best we can do to
      keep you informed on travel rules. This way you can always make sure you
      have everything you need to know before you decide to buy your ticket for{' '}
      <strong>JSConf Budapest 2022.</strong>
    </em></p>

    <h2>Currently, there are no restrictions on entering the country and entering the premises of JSConf Budapest 2022.</h2>

    <p>
      This page has been updated accordingly. As per the latest regulations (in effect since March 7),
      the same travel rules apply as before the pandemic.
    </p>

    <p>
      There are no special rules for entering JSConf Budapest 2022 either.
    </p>

    <p>
      There is a possibility that some EU countries apply stronger restrictions.
      If you plan to travel to Hungary via a different EU country, you should make
      sure you check the EU travel rules. We suggest getting an EU COVID-19 certificate.
    </p>
    <p>
      <strong>
        <a href="https://www.google.com/url?q=https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en&amp;sa=D&amp;source=editors&amp;ust=1645655227959743&amp;usg=AOvVaw2T4k8FzhMnhcsRWoG0YpsG">
          For more information on obtaining an EU COVID-19 certificate, look
          here
        </a>
        .
      </strong>
    </p>
    <h3 id="faq">FAQ</h3>
    <p></p>
    <ul>
      <li>
        <strong>Can I go to a concert in Budapest?</strong> Yes. No restrictions apply.
      </li>
      <li>
        <strong>Can I go to a restaurant in Budapest?</strong> Yes. No restrictions apply.
      </li>
      <li>
        <strong>Can I go to a bar in Budapest?</strong> We&rsquo;d recommend
        going to an open bar but the answer is yes. No restrictions apply.
      </li>
      <li>
        <strong>
          Can I enter JSConf Budapest 2022 without being vaccinated?
        </strong> According to Hungarian rules, yes, you can.{' '}
        However, we strongly recommend getting a negative PCR test before doing so.
      </li>
    </ul>
    <h2 id="further-reading-official-sources">
      Further reading, official sources
    </h2>
    <p>
      <a href="https://www.consilium.europa.eu/en/policies/coronavirus/covid-19-travel-in-the-eu/">
        For more information on travel within the EU, look for the European
        Commission guide
      </a>
      .
    </p>
    <p>
      <a href="https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en#what-is-the-eu-digital-covid-certificate">
        For further information on the EU digital vaccine certificate, please
        read the European Commission website
      </a>
      .
    </p>
    <p>
      <a href="https://www.consilium.europa.eu/en/policies/coronavirus/eu-digital-covid-certificate/">
        For more information on how the EU digital certificate works, which
        tests are accepted, check the European Council tips
      </a>
      .
    </p>
  </Layout>
)

export default Covid
