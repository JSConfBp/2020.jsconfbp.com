import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

export default class Button extends React.Component {
  getButtonClass() {
    const {
      color = 'yellow',
      block = false,
      fill = false,
      disabled = false,
      className: propClasses = [],
    } = this.props

    const className = ['button']

    if (block) {
      className.push('button__block')
    }

    if (disabled) {
      className.push('button__disabled')
    }

    if (fill) {
      if (color) {
        className.push(`button__fill__color__${color}`)
      } else {
        className.push('button__fill')
      }
    } else if (color) {
      className.push(`button__color__${color}`)
    }

    return className.concat(propClasses).join(' ')
  }

  render() {
    const { to, href, children, onClick, disabled } = this.props

    const useButton = !!onClick
    const useLink = !useButton && !!to

    const className = this.getButtonClass()

    let button = ''

    if (useButton) {
      button = (
        <button
          className={className}
          onClick={e => onClick(e)}
          disabled={disabled}
        >
          {children}
        </button>
      )
    } else if (useLink) {
      button = (
        <Link to={to} className={className} disabled>
          {children}
        </Link>
      )
    } else if (disabled) {
      button = (
        <span className={className} disabled>
          {children}
        </span>
      )
    } else {
      button = (
        <a href={href} className={className} disabled>
          {children}
        </a>
      )
    }

    return button
  }
}
