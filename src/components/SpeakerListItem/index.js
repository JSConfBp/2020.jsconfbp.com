import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import SpeakerImage from '../SpeakerImage'
import * as css from './speakerlistitem.module.scss'

export const SpeakerListItem = (props) => {
  const { name, title, url, picture, index } = props

  let orientation = ''
  let turn = 'down'

  switch (index % 2) {
    case 0:
      orientation = css.right
      break
    case 1:
    default:
      orientation = css.left
      turn = 'up'
      break
  }

  const variantHash =
    name.split('').reduce((i, letter) => i + letter.charCodeAt(0), 0) % 2
  const variant = variantHash > 0 ? 'purple' : 'orange'

  return (
    <Link className={classnames(css.speaker, orientation)} to={url}>
      <h5>{name}</h5>
      <h4>{title}</h4>
      <SpeakerImage
        src={picture}
        color={variant}
        turn={turn}
        className={css.image}
      />
    </Link>
  )
}
