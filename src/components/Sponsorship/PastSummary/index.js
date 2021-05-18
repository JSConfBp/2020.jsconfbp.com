import React from 'react'

import * as css from './past_summary.module.scss'

const PastSummary = () => (
  <>
    <div className={css.past_summary}>
      <div className={css.block_inner}>
        <h2 className={css.title}>Our past years were awesome!</h2>
        <h3>Here’s what happened so far in 4 years:</h3>

        <div className={css.big_summary}>
          <div className={css.col_speakers}>
            <span className={css.stat_number}>92</span>
            <h4 className={css.label}>Speakers</h4>
          </div>

          <div className={css.col_attendees}>
            <span className={css.stat_number}>2144</span>
            <h4 className={css.label}>Attendees</h4>
          </div>

          <div className={css.col_countries}>
            <span className={css.stat_number}>36</span>
            <h4 className={css.label}>Countries</h4>
          </div>
        </div>

        <div className={css.video}>
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
