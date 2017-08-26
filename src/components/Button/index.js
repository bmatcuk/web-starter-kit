import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './styles.css'

const Button = ({ className, ...props }) => (
  <a className={ cn(styles.button, className) } {...props} />
)

Button.propTypes = {
  className: PropTypes.string
}

export default Button

export const LinkButton = ({ className, ...props }) => (
  <Link className={ cn(styles.button, className) } {...props} />
)

LinkButton.propTypes = {
  className: PropTypes.string
}
