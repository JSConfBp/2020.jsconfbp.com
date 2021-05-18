import React from 'react'
import * as css from './reach.module.scss'

const Reach = () => (
  <>
    <div className={css.reach}>
      <div className={css.block_inner}>
        <h2 className={css.title} id="Reach">
          Reach
        </h2>

        <h3>100% relevance in the JavaScript community</h3>

        <div className={css.numbers}>
          <div className={css.twitter} title="Twitter">
            <h4>
              <span className={css.followers}>2.1k</span>
              Followers
            </h4>
          </div>

          <div className={css.youtube} title="Youtube">
            <h4>
              <span className={css.subscribers}>142k</span>
              Subscribers
            </h4>
          </div>

          <div className={css.facebook} title="Facebook">
            <h4>
              <span className={css.reached}>34k</span>
              People Reached
            </h4>
          </div>
        </div>

        <p className={css.notes}>
          Our videos were watched over <strong>242,000 times</strong> on
          YouTube. <br />
          Viewers spend more than <strong>1,742,000 minutes</strong> watching
          the talks online.
        </p>
      </div>
    </div>
  </>
)

export default Reach
