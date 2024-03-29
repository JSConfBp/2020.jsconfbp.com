import React from 'react'
import classnames from 'classnames'
import * as css from './youtube.module.scss'

const Youtube = ({ src, title = '', className = '' }) => (
  <div className={classnames(css.embed, className)}>
    <iframe
      title={`Embed video ${title}`}
      src={`https://www.youtube.com/embed/${src}`}
      gesture="media"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)

export default Youtube
