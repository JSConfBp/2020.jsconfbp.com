import React from 'react'
import classnames from 'classnames'
import * as css from './youtube.module.scss'

const Youtube = ({ src, title = '', className = '' }) => (
  <div className={classnames(css.embed, className)}>
    <iframe
      title={`Embed video ${title}`}
      src={`https://www.youtube.com/embed/${src}`}
      frameborder="0"
      gesture="media"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
)

export default Youtube
