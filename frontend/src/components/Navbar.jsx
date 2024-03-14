import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants';
import { logo, resized_logo } from '../assets';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);



  return (

    <header className=' sticky top-0 z-50 '>
      <nav className=' px-10 sm:px-0 flex max-w-4xl mx-auto py-6 justify-between  items-center navbar'>
        <img src={resized_logo} alt="tutorplan logo" />
        <ul id='main-nav' label="main-nav" className={`list-none ${isMobileMenuOpen ? 'flex flex-col p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar gap-1' : 'hidden'} sm:flex  justify-end items-start sm:items-center  flex-1 `}>
          {navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins font-bold cursor-pointer  sm:mr-10 mr-0 text-[16px] `} >
              <Link
                to={nav.to}
                className={`${selectedLink === nav.id ? 'text-green-400' : ''
                  } ${((index === navLinks.length - 1) && (!isMobileMenuOpen)) ? " text-slate-100 bg-green-500 px-2 py-1 shadow-lg rounded-lg" : "text-slate-200 sm:text-slate-900"} active:text-green-500 focus:text-green-400`}
                onClick={() => setSelectedLink(nav.id)}>
                {nav.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMobileMenu} className='sm:hidden'>{isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
      </nav>
    </header>
  );
};

export default NavBar;
