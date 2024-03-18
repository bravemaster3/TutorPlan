import { Routes, Route, useNavigate } from "react-router-dom"
import SideBar from "components/myDeskComponents/SideBar"
import MyDeskCalendar from "components/myDeskComponents/MyDeskCalendar"
import MyDeskProfile from "components/myDeskComponents/MyDeskProfile"
import MyDeskCourses from "components/myDeskComponents/MyDeskCourses"
import MyDeskPolicy from "components/myDeskComponents/MyDeskPolicy"
import MyDeskStudents from "components/myDeskComponents/MyDeskStudents"
import { useState, useEffect } from "react"
import MyDeskTutors from "components/myDeskComponents/MyDeskTutors"
import MyDeskProfileTutor from "components/myDeskComponents/MyDeskProfileTutor"
import MyDeskCalendarTutor from "components/myDeskComponents/MyDeskCalendarTutor"
import MyDeskCoursesTutor from "components/myDeskComponents/MyDeskCoursesTutor"
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
