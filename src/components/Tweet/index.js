import React from 'react'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import * as css from './tweet.module.scss'

const Tweet = ({ id, title = '', className = '' }) => (
  <div className={classnames(css.tweet, className)}>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        <a
          href={`https://twitter.com/jsconfbp/status/${id}?ref_src=twsrc%5Etfw`}
        >
          {title} on Twitter
        </a>
      </p>
    </blockquote>
    <Helmet>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </Helmet>
  </div>
)

export default Tweet
