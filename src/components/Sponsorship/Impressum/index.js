import React from 'react'

import * as css from './impressum.module.scss'

const Impressum = () => (
  <div className={css.impressum}>
    <div className={css.block_inner}>
      <h3 className={css.title}>Impressum</h3>

      <p>
        JSConf Budapest and CSSConf Budapest is organized by a team from the
        local Hungarian developer community.
      </p>

      <p>
        The Legal entity behind the event is:
        <br />
        <br />
        JSSC Rendezvényszervező Kft <br />
        Budapest 1365 Pf. 717
        <br />
        VAT No.: HU25966330
        <br />
        Reg.#: 01-09-299007
      </p>
    </div>
  </div>
)

export default Impressum
