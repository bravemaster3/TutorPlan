import React, { createContext, useContext, useState } from 'react'
import { AiOutlineCalendar, AiOutlineInfo, AiOutlineUser } from "react-icons/ai";
import { BiBookReader, BiCalendar, BiSolidBookReader } from "react-icons/bi";
import { BsCalendar, BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { PiAddressBook, PiBooks, PiCalendarBlank, PiGraduationCap, PiGraduationCapLight, PiInfo, PiUser } from "react-icons/pi";
import { BsInfoLg } from "react-icons/bs";
import { MdInfoOutline, MdOutlineCalendarToday, MdOutlineDesk } from 'react-icons/md';
MdOutlineDesk
import { Link, useLocation } from 'react-router-dom';
useLocation

const SidebarContext = createContext()
const SideBar = () => {

  const [expanded, setExpanded] = useState(false)
  return (
    <aside className='fixed   left-1 top-1/4 z-[50] text-slate-200 shadow-lg rounded-lg bg-gray-700 my-auto flex flex-col    p-2 '>
      {/* <nav className=' bg-gray-700 my-auto flex flex-col  text-slate-200  p-2 rounded-lg'> */}
      <button onClick={() => setExpanded(curr => !curr)} className='flex flex-col items-center justify-center h-12 mt-2 mb-2 w-12 mx-auto shadow-lg bg-gray-800 text-green-600 hover:bg-green-600 hover:text-slate-200 rounded-3xl hover:rounded-lg transition-all duration-300 ease-linear cursor-pointer group'>
        {expanded ? <BsChevronBarLeft size={24} /> : <BsChevronBarRight size={24} />}
      </button>

      <SidebarContext.Provider value={{ expanded }}>
        <ul className='flex-1 px-2'>
          <SideBarIcon path={"desk"} icon={<MdOutlineDesk size={32} />} text='Desk' />
          <SideBarIcon path={"calendar"} icon={<PiCalendarBlank size={32} />} text='Calendar' />


          <SideBarIcon icon={<PiBooks
            size={32} />} text='Courses' path={"mycourses"} />
          <SideBarIcon icon={<PiAddressBook size={32} />} text='Students' path={"students"} />
          <SideBarIcon icon={<PiInfo
            size={32} />} text='Booking Policy' path={"booking-policy"} />
          <SideBarIcon icon={<AiOutlineUser size={32} />} text='Profile' path={"profile"} />
        </ul>
      </SidebarContext.Provider>

      {/*  </nav> */}



    </aside>
  )
}
const SideBarIcon = ({ icon, text = 'Desk Page', path }) => {
  const location = useLocation();
  const { expanded } = useContext(SidebarContext)
  console.log(location.pathname)
  return (
    <li>
      {/*   <Link to={path} className={`${expanded ? 'justify-start' : 'justify-center '
        } relative flex   text-green-600 items-center p-3 my-2 shadow-lg  hover:bg-green-600 hover:text-slate-200 rounded-3xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer group ${location.pathname === `/${path}` ? 'bg-orange-700' : 'bg-gray-800'
        }`}> */}
      <Link
        to={path}
        className={`${expanded ? 'justify-start' : 'justify-center'
          } relative flex bg-gray-800 items-center p-3 my-2 shadow-lg hover:bg-green-600 hover:text-slate-200 rounded-3xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer focus:bg-orange-700 focus:text-slate-200 group ${location.pathname === `/mydesk/${path}` ? 'bg-orange-700 text-slate-200' : 'text-green-600 '
          }`}
      >

        <div >
          {icon}

        </div>

        <span className={`text-slate-200 font-worksans  ${expanded ? 'ml-2 ' : 'absolute min-w-max left-16 bg-orange-700 rounded-md px-2 py-1 transition-all duration-0 origin-left  scale-0 group-hover:scale-100'}`}>

          {text}
        </span>
      </Link >
    </li>
  );
}

export default SideBar
/* min - w - max left - 0 rounded - md shadow - md text - white bg - gray - 400 text - xs font - bold transition - all duration - 100 scale - 0 origin - left */
