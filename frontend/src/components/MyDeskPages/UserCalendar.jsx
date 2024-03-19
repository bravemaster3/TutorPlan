import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"



const UserCalendar = () => {
  const localizer = momentLocalizer(moment)

  return (
    <>
      <span className=' text-center mx-auto dark:text-slate-200'>
        <h2 className='text-3xl'>Calendar</h2>
        <p>Shows all appointments here</p>
        <p>Option for tutors to drag and drop courses</p>
      </span>

      <main className="flex min-h-screen justify-center items-center  p-0">
        <div className="h-[560px]">
          <Calendar
            localizer={localizer} />

        </div>




      </main>
    </>
  )
}

export default UserCalendar
