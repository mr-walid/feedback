
import PropTypes from 'prop-types'
import React from 'react'

function Button({children, version, type}) {
  return (
    <div type={type} 
     className={`btn btn-${version}`} >
      {children}
    </div>
  )
}


Button.defaultProps={
    version : 'primary',
    type : 'button',
}

Button.propTypes= {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
}

export default Button
