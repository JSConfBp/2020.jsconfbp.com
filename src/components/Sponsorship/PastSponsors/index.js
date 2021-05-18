import React from 'react'
import SponsorList from './list'
import * as css from './pastsponsors.module.scss'

const PastSponsors = () => (
  <>
    <div className={css.sponsor}>
      <div className={css.block_inner}>
        <h2>Recent Sponsors </h2>

        <SponsorList />
      </div>
    </div>
  </>
)

export default PastSponsors
