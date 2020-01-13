import React from 'react'
import classnames from 'classnames'
import SponsorImage from '../../SponsorImage'
import SponsorList from './list'
import data from './data'
import styles from './pastsponsors.module.scss'


const SponsorImageLink = ({ link, image, name }) => (
  <a href={link} title={name}>
    <SponsorImage className={styles.image} image={image} title={name} />
  </a>
)

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
