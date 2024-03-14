import React from 'react'
/* import PropTypes from 'prop-types' */
/* import {FaYoutube, FaGoogle} from 'react-icons/fa' */

/* TODO:
handle click events for the button */


const Button = ({ id, className, label, leftIcon, rightIcon }) => {
  return (
    <button id={id} className={className}>
      {!!leftIcon &&
        (<img className={leftIcon.className} src={leftIcon.src} />)
      }
      {label}

      {!!rightIcon &&
        (<img className={rightIcon.className} src={rightIcon.src} />)}

    </button>

  )
}

Button.propTypes = {}

Button.defaultProps = {
  id: "btn_1",
  className: "flex justify-between items-center gap-4  m-3 p-4 border border-white rounded-sm text-white",
  label: "Click me!",
  /* leftIcon: {
    className: "w-[32] h-[32]",
    src: "/src/assets/react.svg"
  },
  rightIcon: {
    className: "w-[32] h-[32]",
    src: "/src/assets/react.svg"
  } */
}

export default Button;
