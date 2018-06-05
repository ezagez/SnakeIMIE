import React from 'react'
import PropTypes from 'prop-types'

const Button = () => (
  <button onClick={(props.onClick}>
    {props.label}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label : PropTypes.string,
}

Button.defaultProps = {
  label: 'Click-me !'
}

export default Button
