import React from 'react'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import * as css from './flickr.module.scss'

const Flickr = ({ href, image, title = '', className = '' }) => (
  <>
    <div className={classnames(css.flickr_embed, className)}>
      <a data-flickr-embed="true" data-header="true" href={href} title={title}>
        <img src={image} width="100%" height="100%" alt={title} />
      </a>
    </div>
    <Helmet>
      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charSet="utf-8"
      ></script>
    </Helmet>
  </>
)

export default Flickr
