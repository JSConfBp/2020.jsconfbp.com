import React from 'react'
import SponsorList from './list'
import styles from './pastsponsors.module.scss'

const PastSponsors = () => (
  <>
    <div className={styles.sponsor}>
      <div className={styles.block_inner}>
        <h2>Recent Sponsors </h2>

        <SponsorList />

      </div>
    </div>
  </>
)

export default PastSponsors
