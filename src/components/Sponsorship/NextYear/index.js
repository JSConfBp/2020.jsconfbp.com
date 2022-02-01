import React from 'react'

import * as css from './nextyear.module.scss'

const NextYear = () => (
  <>
    <div className={css.nextyear}>
      <div className={css.block_inner}>
        <h2 className={css.title}>Coming up next</h2>

        <h3>2022 June 2-3</h3>

        <div className={css.conferences}>
          <div className={css.jsconf}>
            <h5>JSConf Budapest 2022</h5>
            <ul>
              <li>Single track</li>
              <li>500+ attendees</li>
              <li>25 speakers</li>
              <li>2 parties</li>
            </ul>
          </div>
        </div>

        <div className={css.venue}>
          <h2>Venue</h2>

          <h4>Akvarium Klub Budapest</h4>

          <p>
            Center of the city, 580 square meters of exhibition space, literally
            under a pool
          </p>
        </div>
      </div>
    </div>
  </>
)

export default NextYear
