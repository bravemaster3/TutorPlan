import React, { useEffect, useState } from "react"
import axios from "axios"
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
import { stringToColor } from "components/utils"
import { API_BASE_URL } from "src/apiConfig"
import Spinner from "components/otherComponents/Spinner"
import MyDeskCalendarTutorStudentCard from "./MyDeskCalendarTutorStudentCard"
import { useFetchAvailabilities } from "../utils"

export default function MyDeskCalendarTutor() {
  const localizer = momentLocalizer(moment)
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )
  // const [availabilities, setAvailabilities] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState({})

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const handleEventClick = (event) => {
    setSelectedEvent(event) // Set the selected event in state
    setSelectedStudent(event.student)
    // console.log(event)
    toggleModal()
    // alert(`selected: ${event.title}`)
  }

  const { isLoading, availabilities, error } = useFetchAvailabilities(user.id)

  const events = availabilities
    .map((avail) => ({
      id: avail.id,
      start: new Date(avail.start_time),
      end: new Date(avail.end_time),
      // title: "Available?",
      title: `${avail.courseDetails.title} with ${avail.studentDetails.first_name} ${avail.studentDetails.last_name}`,
      color: stringToColor(avail.courseDetails.title),
      course: avail.courseDetails,
      booking: avail.bookingDetails,
      student: avail.studentDetails,
    }))
    .filter((availability) => availability.start > new Date())

  const EventComponent = ({ event }) => (
    <div className="calendar-event">{event.title}</div>
  )

  return (
    <>
      <div className="calendar-header">
        <div className="title">
          <h3>Hey {user.first_name},</h3>
          <h4>Here are your appointments</h4>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="calendar"
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
          },
        })}
        onSelectEvent={handleEventClick}
        components={{
          event: EventComponent,
        }}
        defaultView="agenda"
      />
      {isLoading && <Spinner text={"Fetching your appointments"} />}

      {isModalOpen && (
        <MyDeskCalendarTutorStudentCard
          toggleModal={toggleModal}
          selectedStudent={selectedStudent}
          event={selectedEvent}
        />
      )}
    </>
  )
}
