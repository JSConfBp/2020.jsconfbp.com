import React from 'react'
import * as css from './scholarships.module.scss'

const Scholarships = () => (
  <>
    <div className={css.scholarship} id="Scholarships">
      <div className={css.block_inner}>
        <h4 className={css.scholarship_title}>10 % to Scholarships</h4>

        <p>
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

export default Scholarships
