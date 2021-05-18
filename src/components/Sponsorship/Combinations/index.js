import React from 'react'
import classnames from 'classnames'
import * as css from './combinations.module.scss'

export default () => {
  return (
    <div className={css.combinations}>
      <div className={css.block_inner}>
        <h4 className={css.info_title}>Create your package</h4>

        <p className={css.info_text}>
          Combine any base package with perks, and create your very own
          Sponsorship Package! <br />
          For example:
        </p>

        <div className={css.example}>
          <ul className={classnames(css.input, 'unstyled')}>
            <li className={css.offer}>
              Gold package <span>€7,000</span>
            </li>
            <li>
              Specialty Coffee <span>€4,000</span>
            </li>
            <li>
              Sketch Notes <span>€2,000</span>
            </li>
            <li className={css.total}>
              Total <span>€13,000</span>
            </li>
          </ul>

          <div className={css.result}>
            <p>
              This equals a <strong>Platinum package</strong> with branded
              Coffee and Sketch Notes
            </p>
          </div>
        </div>

        <p className={css.info_text}>
          Package levels are determined by contribution level, <br />
          summarized by the base package you choose and optional additional
          perks.
        </p>
        <p className={css.info_text}>
          For example a Gold level contribution and a{' '}
          <a href="#perks">Specialty Coffee & Sketch Notes perk</a> together can
          raise your contribution over the Platinum package level, <br />
          so you'll receive the <strong>Platinum</strong> package itself!
        </p>
      </div>
    </div>
  )
}
