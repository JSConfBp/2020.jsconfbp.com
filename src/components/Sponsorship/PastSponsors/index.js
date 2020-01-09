import React from 'react'
import classnames from 'classnames'
import SponsorImage from '../../SponsorImage'
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

        <ul
          className={classnames(styles.sponsor_list, styles.sponsor_list_big)}
        >
          {data.big.map(sponsor => (
            <li
              className={styles[`sponsor_${sponsor.level}`]}
              key={sponsor.name}
            >
              <SponsorImageLink {...sponsor} />
            </li>
          ))}
        </ul>
        <ul
          className={classnames(
            styles.sponsor_list,
            styles.sponsor_list_medium
          )}
        >
          {data.med.map(sponsor => (
            <li
              className={styles[`sponsor_${sponsor.level}`]}
              key={sponsor.name}
            >
              <SponsorImageLink {...sponsor} />
            </li>
          ))}
        </ul>
        <ul className={styles.sponsor_list}>
          {data.sm.map(sponsor => (
            <li
              className={styles[`sponsor_${sponsor.level}`]}
              key={sponsor.name}
            >
              <SponsorImageLink {...sponsor} />
            </li>
          ))}
        </ul>

        <ul className={styles.sponsor_list}>
          {data.scholarship.map(sponsor => (
            <li className={styles.sponsor_scholarship} key={sponsor.name}>
              <SponsorImageLink {...sponsor} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default PastSponsors
