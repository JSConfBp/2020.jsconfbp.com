import React from 'react'
import classnames from 'classnames'
import SponsorImage from '../SponsorImage'

import * as css from './sponsorlist.module.scss'

const SponsorList = () => {
  return (
    <section className={classnames(css.sponsors)}>
      <div className={css.inner}>
        <h2 id="Sponsors">Sponsors</h2>
        <ul className={classnames(css.sponsor_list, css.platinum, 'unstyled')}>
          <li>
            <SponsorImage
              image="wrike-logo-black-green.png"
              alt="JSConf Budapest 2022 is sponsored by Wrike"
              href="https://www.wrike.com/vn/"
            />
          </li>
        </ul>
        <ul className={classnames(css.sponsor_list, css.gold, 'unstyled')}>
          <li>
            <SponsorImage
              image="xata-black-logo-with-butterfly.png"
              alt="JSConf Budapest 2022 is sponsored by Xata"
              href="https://xata.io/"
            />
          </li>
          <li>
            <SponsorImage
              image="new_relic_logo.png"
              alt="JSConf Budapest 2022 is sponsored by New Relic"
              href="https://newrelic.com/"
            />
          </li>
          <li>
            <SponsorImage
              image="stately.png"
              alt="JSConf Budapest 2022 is sponsored by Stately"
              href="https://stately.ai/"
            />
          </li>
          <li>
            <SponsorImage
              image="exadel.png"
              alt="JSConf Budapest 2022 is sponsored by Exadel"
              href="https://exadel.com/"
            />
          </li>
        </ul>
        <ul className={classnames(css.sponsor_list, css.silver, 'unstyled')}>
          <li>
            <SponsorImage
              image="Logo-ThisDot-Labs-sm.png"
              alt="JSConf Budapest 2022 is sponsored by This Dot Labs"
              href="https://www.thisdot.co/"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SponsorList
