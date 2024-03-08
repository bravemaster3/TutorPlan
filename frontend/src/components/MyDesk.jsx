import { Routes, Route, useNavigate } from "react-router-dom"
import SideBar from "./SideBar"
import MyDeskCalendar from "./MyDeskCalendar"
import MyDeskProfile from "./MyDeskProfile"
import MyDeskCourses from "./MyDeskCourses"
import MyDeskPolicy from "./MyDeskPolicy"
import MyDeskStudents from "./MyDeskStudents"
import { useState, useEffect } from "react"
import MyDeskTutors from "./MyDeskTutors"
import MyDeskProfileTutor from "./MyDeskProfileTutor"
import MyDeskCalendarTutor from "./MyDeskCalendarTutor"
import MyDeskCoursesTutor from "./MyDeskCoursesTutor"
export default function MyDesk({ authenticated }) {
  const navigateTo = useNavigate()

  let myDeskContent

  useEffect(() => {
    if (!authenticated) {
      if (
        window.confirm(
          "You need to login to access this page. Kindly proceed to login!"
        )
      ) {
        navigateTo("/login")
        // ;<Redirect to="/login" />
      }
    }
  }, [authenticated])

  const accountType = localStorage.getItem("accountType")
  // console.log(`You are logged in as a ${accountType}`)
  if (accountType == "student") {
    myDeskContent = (
      <Routes>
        <Route path="/" element={<MyDeskCalendar />} />
        <Route path="/profile" element={<MyDeskProfile />} />
        <Route path="calendar" element={<MyDeskCalendar />} />
        <Route path="mycourses" element={<MyDeskCourses />} />
        <Route path="tutors" element={<MyDeskTutors />} />
        <Route path="booking-policy" element={<MyDeskPolicy />} />
      </Routes>
    )
  } else if (accountType == "tutor") {
    myDeskContent = (
      <Routes>
        <Route path="/" element={<MyDeskCalendarTutor />} />
        <Route path="/profile" element={<MyDeskProfileTutor />} />
        <Route path="calendar" element={<MyDeskCalendarTutor />} />
        <Route path="mycourses" element={<MyDeskCoursesTutor />} />
        <Route path="students" element={<MyDeskStudents />} />
        <Route path="booking-policy" element={<MyDeskPolicy />} />
      </Routes>
    )
  }

  return (
    <div className="mydesk">
      <SideBar authenticated={authenticated} />
      <div className="mydesk-content">
        {/* <Routes>
          <Route path="/" element={<MyDeskProfile />} />
          <Route path="/profile" element={<MyDeskProfile />} />
          <Route path="calendar" element={<MyDeskCalendar />} />
          <Route path="mycourses" element={<MyDeskCourses />} />
          <Route path="students" element={<MyDeskStudents />} />
          <Route path="booking-policy" element={<MyDeskPolicy />} />
        </Routes> */}
        {myDeskContent}
      </div>
    </div>
  )
}
