import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
/* import { navLinks } from '../constants'; */
import { logo, resized_logo } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import useLogout from '../hooks/useLogout';


const NavBar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = () => {
    logout();
    navigate('/login');
    console.log('signing out')


  }
  //console.log(auth)


  const navLinks = [
    {
      id: "home",
      title: "Home",
      to: "/"
    },

    {
      id: "courses",
      title: "Courses",
      to: "/Courses"
    },
    {
      id: "my-desk",
      title: "My Desk",
      to: "/mydesk"
    },
    {
      id: "about",
      title: "About Us",
      to: "/about"
    },
    (auth.userData ?
      {
        id: "logout",
        title: "LOG OUT",
        to: "/login"
      } :
      {
        id: "login",
        title: "SIGN IN",
        to: "/login"
      }),

  ];


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useLayoutEffect(() => {
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

    <>
      <nav className=' px-8 sm:px-0 flex max-w-4xl mx-auto py-6 justify-between bg-white dark:bg-slate-700 items-center navbar'>
        <img src={resized_logo} alt="tutorplan logo" className='w-[80px] h-[24px]' />
        <ul id='main-nav' label="main-nav" className={`list-none ${isMobileMenuOpen ? 'flex flex-col p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar gap-1' : 'hidden'} sm:flex  justify-end items-start sm:items-center  flex-1 `}>
          {navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins font-bold cursor-pointer  sm:mr-8 mr-0 text-[16px] `} >
              <Link
                to={nav.to}
                className={`${selectedLink === nav.id ? 'text-green-400' : ''
                  } ${((index === navLinks.length - 1) && (!isMobileMenuOpen)) ? ` text-slate-100 ${nav.id === 'logout' ? ' bg-slate-500 ' : '  bg-green-500 '}  px-2 py-1 shadow-md rounded-sm` : "text-slate-200 sm:text-slate-900 dark:text-slate-300 hover:text-orange-400"} active:text-green-500 focus:text-green-400`}
                onClick={() => { setSelectedLink(nav.id); console.log(nav.id); if (nav.id === 'logout') { signOut() } }}>
                {nav.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMobileMenu} className='sm:hidden'>{isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
      </nav>
    </>
  );
};

export default NavBar;
