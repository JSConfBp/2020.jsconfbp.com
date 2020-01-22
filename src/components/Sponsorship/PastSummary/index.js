import React from 'react'

import styles from './past_summary.module.scss'

const PastSummary = () => (
  <>
    <div className={styles.past_summary}>
      <div className={styles.block_inner}>
        <h2 className={ styles.title }>Our past years were awesome!</h2>
        <h3>Here’s what happened so far in 4 years:</h3>

        <div className={styles.big_summary}>
          <div className={styles.col_speakers}>
            <span className={styles.stat_number}>92</span>
            <h4 className={styles.label}>Speakers</h4>
          </div>

          <div className={styles.col_attendees}>
            <span className={styles.stat_number}>2144</span>
            <h4 className={styles.label}>Attendees</h4>
          </div>

          <div className={styles.col_countries}>
            <span className={styles.stat_number}>36</span>
            <h4 className={styles.label}>Countries</h4>
          </div>
        </div>

        <div className={styles.video}>
          <iframe
            title="JSConf Budapest Mood video"
            className="mood-video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oWmPuKDiRV4"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </>
)

export default PastSummary
