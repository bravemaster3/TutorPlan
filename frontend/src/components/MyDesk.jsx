import { Routes, Route } from "react-router-dom"
import SideBar from "./SideBar"
import MyDeskCalendar from "./MyDeskCalendar"
import MyDeskProfile from "./MyDeskProfile"
import MyDeskCourses from "./MyDeskCourses"
import MyDeskPolicy from "./MyDeskPolicy"
import MyDeskStudents from "./MyDeskStudents"
import { useState } from "react"
export default function MyDesk() {
  const [accountType, setAccountType] = useState(
    console.log(localStorage.getItem("accountType"))
  )
  console.log(accountType)
  return (
    <div className="mydesk">
      <SideBar />
      <div className="mydesk-content">
        <Routes>
          <Route path="/" element={<MyDeskProfile />} />
          <Route path="/profile" element={<MyDeskProfile />} />
          <Route path="calendar" element={<MyDeskCalendar />} />
          <Route path="mycourses" element={<MyDeskCourses />} />
          <Route path="students" element={<MyDeskStudents />} />
          <Route path="booking-policy" element={<MyDeskPolicy />} />
        </Routes>
      </div>
    </div>
  )
}
