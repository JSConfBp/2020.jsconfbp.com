import React from 'react'
import Layout from '../components/Layout'
import { useHeadingDecorator } from '../hooks/useHeadingDecorator'
import WorkshopList from '../components/WorkshopList'

const Workshops = () => {
  const [, getClassName] = useHeadingDecorator()
  return (
    <Layout
      title="Workshops"
      pathName="/workshops"
      image="social_card_workshops.jpg"
    >
      <h1 className={getClassName({ color: 'purple', side: 'right' })}>
        Workshops
      </h1>

      <p>
        <strong>
          These workshops are FREE for every ticket holder of JSConf Budapest
          2022.
        </strong>
      </p>

      <p>
        The workshops have limited seats, so be sure to{' '}
        <a href="https://ti.to/jsconf-bp/jsconf-budapest-2022">
          get your ticket
        </a>{' '}
        before they fill up! We'll open them slowly, so everyone has a chance to
        pick a workshop they like.
      </p>

      <p>
        You will be able to register to a workshop using the ID on your ticket.
        If will be possible to switch the workshop you've picked later, if there
        is a free seat available on another workshop.
      </p>

      <WorkshopList />
    </Layout>
  )
}

export default Workshops
