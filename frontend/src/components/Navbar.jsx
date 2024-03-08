import React from 'react'
import { useState } from 'react'
import {close, logo,  menu } from '../assets/images'
import { navLinks } from '../constants'
const Navbar = () => {
  return (
	<nav className="w-full flex py-6 justify-between item-center navbar">
    <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) =>(
        <li
        key={nav.id}
        className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>

  </nav>
  )
}

export default Navbar
