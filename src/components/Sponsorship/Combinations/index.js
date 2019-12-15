import React from 'react'
import css from './combinations.module.scss'

export default () => {

  return (
    <div className={css.combinations}>
      <div className={css.block_inner}>

      <h4 className={css.info_title}>Create your package</h4>

        <p className={css.info_text}>
          Combine any base package with perks, and create your very own Sponsorship Package!
        </p>
        <p className={css.info_text}>
          Package levels are determined by contribution level, summarized by
          the base package you choose and optional additional perks.
        </p>
        <p className={css.info_text}>
          For example a Gold level contribution and a{' '}
          <a href="#perks">Party Sponsorship perk</a> together can raise your
          contribution over the Platinum package level, so you'll receive the
          Platinum perk itself!
        </p>
      </div>
    </div>
  )
}
