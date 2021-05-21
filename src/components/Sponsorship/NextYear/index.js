import React from 'react'

import * as css from './nextyear.module.scss'

const NextYear = () => (
  <>
    <div className={css.nextyear}>
      <div className={css.block_inner}>
        <h2 className={css.title}>Coming up next</h2>

        <h3>
          2022 June 2-3
          <br />
          Ticket sales started in December, 2019!
        </h3>

        <div className={css.conferences}>
          <div className={css.jsconf}>
            <h5>JSConf Budapest 2022</h5>
            <ul>
              <li>Single track</li>
              <li>500+ attendees</li>
              <li>20 speakers</li>
              <li>2 parties</li>
            </ul>
          </div>
        </div>

        <div className={css.venue}>
          <h2>Venue</h2>

          <h5>TBD</h5>
        </div>
      </div>
    </div>
  </>
)

export default NextYear
