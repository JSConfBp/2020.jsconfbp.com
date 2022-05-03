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
          <li>
            <SponsorImage
              image="genesys.png"
              alt="JSConf Budapest 2022 is sponsored by Genesys"
              href="https://www.genesys.com/company/careers"
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
              image="abbyy.png"
              alt="JSConf Budapest 2022 is sponsored by ABBYY"
              href="https://www.abbyy.com/company/careers/open-positions/"
            />
          </li>
          <li>
            <SponsorImage
              image="epam.png"
              alt="JSConf Budapest 2022 is sponsored by EPAM"
              href="https://careers.epam.hu/"
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
          <li>
            <SponsorImage
              image="hasura.png"
              alt="JSConf Budapest 2022 is sponsored by Hasura"
              href="https://hasura.com/"
            />
          </li>
          <li>
            <SponsorImage
              image="supercharge.png"
              alt="JSConf Budapest 2022 is sponsored by Supercharge"
              href="https://supercharge.io/"
            />
          </li>
        </ul>
        <ul className={classnames(css.sponsor_list, css.silver, 'unstyled')}>
          <li>
            <SponsorImage
              image="this-dot.png"
              alt="JSConf Budapest 2022 is sponsored by This Dot Labs"
              href="https://thisdot.co/jobs"
            />
          </li>
          <li>
            <SponsorImage
              image="twilio-logo.png"
              alt="JSConf Budapest 2022 is sponsored by Twilio"
              href="https://www.twilio.com/company/jobs"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SponsorList
