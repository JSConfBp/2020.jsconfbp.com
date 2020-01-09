import React from 'react'

import styles from './nextyear.module.scss'

const NextYear = () => (
  <>
    <div className={styles.nextyear}>
      <div className={styles.block_inner}>
        <h2>Coming up next</h2>

        <h3>
          2020 September 24-25
          <br />
          Ticket sales started in December, 2019!
        </h3>

        <div className={styles.conferences}>
          <div className={styles.jsconf}>
            <h5>JSConf Budapest 2020</h5>
            <ul>
              <li>Single track</li>
              <li>500+ attendees</li>
              <li>20 speakers</li>
              <li>2 parties</li>
            </ul>
          </div>
        </div>

        <div className={styles.venue}>
          <h2>Venue</h2>

          <h5>TBD</h5>
        </div>
      </div>
    </div>
  </>
)

export default NextYear
