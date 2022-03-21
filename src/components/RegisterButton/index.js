import React from 'react'
import Button from '../Button'
import * as css from './registerbutton.module.scss'

export default ({ id, disabled = false }) => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    disabled={disabled}
    href={'https://workshop-registration.herokuapp.com/'}
    className={css.ticket_button}
  >
    {disabled ? 'Open Soon' : 'Register Now'}
  </Button>
)
