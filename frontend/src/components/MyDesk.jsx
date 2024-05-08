import React from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { BookingPolicy, SideBar, UserCalendar, UserCourses, UserDesk, UserProfile, ViewOtherUsers } from './MyDeskPages'
import styles, { layout } from '../style'
//import { FormCoursesProvider } from '../context/FormCoursesContext'


const MyDesk = () => {
  return (
    <>
      <SideBar />

      <section className={` ${layout.sectionHeight} flex flex-col mx-24 w-[50rem] bg-green-400  p-6 `}>
        {/* <FormCoursesProvider> */}
        <Outlet />
        {/* </FormCoursesProvider> */}
      </section>


    </>
   /*  <main className='bg-emerald-600'>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Desk</h2>
      <SideBar />
      <section>
        <Routes>
          <Route path="/" element={<UserDesk />} />
          <Route path="/desk" element={<UserDesk />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="calendar" element={<UserCalendar />} />
          <Route path="mycourses" element={<UserCourses />} />
          <Route path="students" element={<ViewOtherUsers />} />
          <Route path="booking-policy" element={<BookingPolicy />} />
        </Routes>
      </section>



    </main> */
  )
}

export default MyDesk
