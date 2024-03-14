import React, { useEffect, useState } from "react"
import axios from "axios"
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
import { stringToColor } from "./utils"
import { API_BASE_URL } from "../apiConfig"
import Spinner from "./Spinner"

export default function MyDeskCalendarTutor() {
  const localizer = momentLocalizer(moment)
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )
  const [availabilities, setAvailabilities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/availability/${user.id}/tutor`
        )
        console.log("Availabilities response:", response.data)
        const initialAvailabilities = response.data
        // Fetch details for each availability
        const availWithDetails = await Promise.all(
          initialAvailabilities.map(async (avail) => {
            const courseResponse = await axios.get(
              `${API_BASE_URL}/courses/${avail.course_id}`
            )
            const courseDetails = courseResponse.data
            // Fetch booking details if needed
            // const bookingsResponse = await axios.get(`${API_BASE_URL}/bookings/${avail.course_id}/course`);
            // const bookingDetails = bookingsResponse.data.find((booking) => booking.availability_id === avail.id);
            // const studentDetails = bookingDetails ? await axios.get(`${API_BASE_URL}/students/${bookingDetails.student_id}`) : null;
            return {
              ...avail,
              courseDetails,
              // bookingDetails,
              // studentDetails: studentDetails ? studentDetails.data : null,
            }
          })
        )
        console.log("Availabilities with details:", availWithDetails)
        setAvailabilities(availWithDetails)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching availabilities:", error)
        setIsLoading(false)
      }
    }

    if (user.id) {
      fetchAvailabilities()
    }
  }, [user.id])

  const events = availabilities.map((avail) => ({
    id: avail.id,
    start: new Date(avail.start_time),
    end: new Date(avail.end_time),
    // title: "Available?",
    title: `${avail.courseDetails.title}`, //`with ${avail.studentDetails.first_name} ${avail.studentDetails.last_name}`,
    color: stringToColor(avail.courseDetails.title),
    course: avail.courseDetails,
  }))

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
        components={{
          event: EventComponent,
        }}
      />
      {isLoading && <Spinner text={"Fetching your appointments"} />}
    </>
  )
}
