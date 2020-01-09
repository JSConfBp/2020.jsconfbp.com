import React from 'react'
import styles from './scholarships.module.scss'

export default () => (
  <>
    <div className={styles.scholarship}>
      <div className={styles.block_inner}>
        <h4 className={styles.scholarship_title}>10 % to Scholarships</h4>

        <p className={styles.scholarship_text}>
          From every package we put 10% directly to our Scholarship Fund - this
          fund will be used to sponsor individuals or students from
          underrepresented groups in tech, to travel and attend the conference.
          <br />
          <br />
          Your support can really make a difference!
        </p>
      </div>
    </div>
  </>
)
