import React from 'react'
import styles from './packageinfo.module.scss'

export default () => (
  <>
    <div className={styles.packages}>
      <div className={styles.block_inner}>
        <h4 className={styles.info_title}>We can help with your presence</h4>

        <p className={styles.info_text}>
          Sponsorship packages with booths include a wide screen TV and a
          backdrop, with your design, which we will provide for your exhibition
          booth - so you can travel light, if needed. If you need ideas on how
          to make your booth more appealing for the attendees,{' '}
          <a href="mailto:team@jsconfbp.com?subject=Lets talk about Sponsoring">
            let's talk
          </a>
          , we have tons of ideas!
        </p>

        <a name="workshops" />
        <h4 className={styles.info_title}>Sponsor with Workshops!</h4>

        <p className={styles.info_text}>
          If your company has a product or a service, you can sponsor us by
          bringing a full-day, or half-day workshop to our planned 0th day
          "Workshop day". These Workshops will be free for every ticket holder,
          they can sign on one of them on first-come-first serve basis, and gain
          hands-on knowledge of the techniques, services or products you offer.
        </p>

        <p className={styles.info_text}>
          We can help you find venue and catering for the workshop, but you need
          to cover it's expenses - since it's still a sponsorship.{' '}
          <strong>In return we give you a Gold level package for FREE</strong>,
          so you can be present at the conference as well!
        </p>

        <p className={styles.info_text}>
          For ideas and more information don't hesitate to{' '}
          <a href="mailto:team@jsconfbp.com?subject=We could bring you a Workshop!">
            contact us
          </a>
          !
        </p>
      </div>
    </div>
  </>
)
