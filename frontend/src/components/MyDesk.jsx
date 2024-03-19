import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { BookingPolicy, SideBar, UserCalendar, UserCourses, UserDesk, UserProfile, ViewOtherUsers } from './MyDeskPages'

const MyDesk = () => {
  return (
    <main className='bg-emerald-600'>
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



    </main>
  )
}

export default MyDesk
