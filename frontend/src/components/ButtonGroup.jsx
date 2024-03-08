import React from 'react';
import {FaYoutube, FaGoogle} from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons"

const ButtonGroup = ({ item }) => {
  // Destructuring properties from the 'item' prop
  const { id, label, className } = item;

  return (
    <>
      {/* Rendering a button with the specified id, class name, and label */}
      <button id={id} className={className}>
         <img className="google" src="/src/assets/images/googleicon.png"></img>
        {label}
      </button>
    </>
  );
};

export default ButtonGroup;
