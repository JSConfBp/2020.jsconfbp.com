import React from 'react'
import classnames from 'classnames'
import SponsorImage from '../../SponsorImage'
import data from './data'
import * as css from './pastsponsors.module.scss'

const SponsorImageLink = ({ link, image, name }) => (
  <a href={link} title={name}>
    <SponsorImage image={image} title={name} />
  </a>
)

const SponsorList = () => (
  <>
    <ul className={classnames(css.sponsor_list, css.sponsor_list_big)}>
      {data.big.map((sponsor) => (
        <li className={css[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
    <ul className={classnames(css.sponsor_list, css.sponsor_list_medium)}>
      {data.med.map((sponsor) => (
        <li className={css[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
    <ul className={css.sponsor_list}>
      {data.sm.map((sponsor) => (
        <li className={css[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>

    <ul className={css.sponsor_list}>
      {data.scholarship.map((sponsor) => (
        <li className={css.sponsor_scholarship} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
  </>
)

export default SponsorList
