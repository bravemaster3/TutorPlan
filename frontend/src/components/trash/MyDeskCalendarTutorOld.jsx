// import { Calendar, momentLocalizer } from "react-big-calendar"
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import moment from "moment"
// import { useEffect, useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
// import { stringToColor } from "./utils"

import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
import { stringToColor } from "./utils"
import { API_BASE_URL } from "../apiConfig"
import axios from "axios"

import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"
import { useCourseDetails, useCourseForm, useFetchCourses } from "./utils"
import CourseDetails from "./CourseDetails"
import CloseIconSimple from "./CloseIconSimple"
import NewCourseTutor from "./NewCourseTutor"
import Spinner from "./Spinner"

export default function MyDeskCalendarTutor() {
  const localizer = momentLocalizer(moment)
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )

  const [availabilities, setAvailabilities] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null) // State to store the selected event
  const [isLoading, setIsLoading] = useState(true)

  // const tutorName = "Johnson" // this should come from the server later
  // const [bookings, setBookings] = useState([
  //   {
  //     id: 1,
  //     course_title: "Guitar class",
  //     student_name: "Alice Carter",
  //     start_time: "2024-03-04 13:00:00",
  //     end_time: "2024-03-04 15:00:00",
  //   },
  // ])

  // useEffect(() => {
  //   const fetchBookings = async () => {
  //     try {
  //       const url = `${API_BASE_URL}/availability/${user.id}/tutor`
  //       const response = await axios.get(url)
  //       console.log("URL", url)
  //       console.log("Tutor's availabilities", response)

  //       // const InitialBookings = response.data.filter((booking) => {
  //       //   return events.some((event) => event.id === booking.availability_id)
  //       // })

  //       const initialAvailabilities = response.data

  //       // Fetch all details for each availability
  //       const availWithDetails = await Promise.all(
  //         initialAvailabilities.map(async (avail) => {
  //           // Fetch course details
  //           const courseUrl = `${API_BASE_URL}/courses/${avail.course_id}`
  //           const courseResponse = await axios.get(courseUrl)
  //           const courseDetails = courseResponse.data

  //           //using the tutor info
  //           let tutor
  //           useEffect(() => (tutor = user), [user])

  //           // getting all bookings for a course
  //           const bookingsUrl = `${API_BASE_URL}/bookings/${avail.course_id}/course`
  //           const bookingsResponse = await axios.get(bookingsUrl)
  //           const bookingDetails = bookingsResponse.data

  //           //Fetch student details for each booking
  //           const bookingsWithStudents = await Promise.all(
  //             bookingDetails.map(async (booking) => {
  //               const studentUrl = `${API_BASE_URL}/students/${booking.student_id}`
  //               const studentResponse = await axios.get(studentUrl)
  //               const studentDetails = studentResponse.data
  //             })
  //           )
  //         })
  //       )

  //       /*********** */

  //       // Fetch availability details for each booking

  //       setBookings(bookingsWithAvailabilityDetails)
  //       setIsLoading(false)
  //     } catch (error) {
  //       alert("An error has occurred. Read more in the console")
  //       console.log(error)
  //     }
  //   }

  //   const handleFetchBookings = async () => {
  //     await fetchBookings()
  //     console.log("Bookings were fetched?", bookings)
  //   }
  //   handleFetchBookings()
  // }, [])

  // useEffect(() => {
  //   const fetchAvailabilities = async () => {
  //     try {
  //       const url = `${API_BASE_URL}/availability/${user.id}/tutor`
  //       const response = await axios
  //         .get(url)
  //         .catch((error) => console.log(error))
  //       console.log("URL", url)
  //       console.log("Tutor's availabilities", response)

  //       const initialAvailabilities = response.data

  //       // Fetch all details for each availability
  //       const availWithDetails = await Promise.all(
  //         initialAvailabilities.map(async (avail) => {
  //           // Fetch course details
  //           const courseUrl = `${API_BASE_URL}/courses/${avail.course_id}`
  //           const courseResponse = await axios
  //             .get(courseUrl)
  //             .catch((error) => console.log(error))
  //           const courseDetails = courseResponse.data
  //           // console.log("COURSE DETAILS", courseDetails)

  //           // Fetch tutor details
  //           const tutorDetails = user // Assuming user contains tutor details

  //           // Fetch booking details
  //           const bookingsUrl = `${API_BASE_URL}/bookings/${avail.course_id}/course`
  //           const bookingsResponse = await axios.get(bookingsUrl)
  //           const bookingDetails = bookingsResponse.data.find(
  //             (booking) => booking.availability_id === avail.id
  //           )
  //           // console.log("BOOKING", bookingDetails)

  //           if (bookingDetails) {
  //             const studentUrl = `${API_BASE_URL}/students/${bookingDetails.student_id}`
  //             const studentResponse = await axios.get(studentUrl)
  //             const studentDetails = studentResponse.data

  //             // console.log("Student details", studentDetails)
  //           }

  //           // Combine all details and return
  //           return {
  //             ...avail,
  //             // availabilityDetails: avail,
  //             courseDetails,
  //             tutorDetails,
  //             bookingDetails,
  //             studentDetails,
  //           }
  //         })
  //       )

  //       // Now availWithDetails is an array of objects, each containing combined details
  //       console.log("AVAILABILITY WITH DETAILS", availWithDetails)
  //       setAvailabilities(availWithDetails)

  //       // Do something with availWithDetails
  //     } catch (error) {
  //       alert("An error has occurred. Read more in the console")
  //       console.log(error)
  //     }
  //   }

  //   fetchAvailabilities()
  // }, [])

  const fetchAvailabilities = async () => {
    try {
      const url = `${API_BASE_URL}/availability/${user.id}/tutor`
      const response = await axios.get(url)
      console.log("URL", url)
      console.log("Tutor's availabilities", response)

      const initialAvailabilities = response.data

      // Fetch all details for each availability
      const availWithDetails = await Promise.all(
        initialAvailabilities.map(async (avail) => {
          // Fetch course details
          const courseUrl = `${API_BASE_URL}/courses/${avail.course_id}`
          const courseResponse = await axios.get(courseUrl)
          const courseDetails = courseResponse.data

          // Fetch tutor details
          const tutorDetails = user // Assuming user contains tutor details

          // Fetch booking details
          const bookingsUrl = `${API_BASE_URL}/bookings/${avail.course_id}/course`
          const bookingsResponse = await axios.get(bookingsUrl)
          const bookingDetails = bookingsResponse.data.find(
            (booking) => booking.availability_id === avail.id
          )

          let studentDetails = null // Initialize studentDetails to null

          if (bookingDetails) {
            // If bookingDetails exist, fetch student details
            const studentUrl = `${API_BASE_URL}/students/${bookingDetails.student_id}`
            const studentResponse = await axios.get(studentUrl)
            studentDetails = studentResponse.data
          }

          // Combine all details and return
          return {
            ...avail,
            courseDetails,
            tutorDetails,
            bookingDetails,
            studentDetails,
          }
        })
      )

      // Now availWithDetails is an array of objects, each containing combined details
      console.log("AVAILABILITY WITH DETAILS", availWithDetails)
      setAvailabilities(availWithDetails)
      setIsLoading(false)

      // Do something with availWithDetails
    } catch (error) {
      // Handle errors appropriately
      alert("An error has occurred. Read more in the console")
      console.log(error)
    }
  }

  const events = availabilities.map((avail) => ({
    id: avail.id,
    start: new Date(avail.start_time),
    end: new Date(avail.end_time),
    title: "Available?",
    // title: `${avail.courseDetails.title} with ${avail.studentDetails.first_name} ${avail.studentDetails.last_name}`,
    color: stringToColor(avail.courseDetails.title),
    course: avail.courseDetails,
  }))

  // const events = bookings.map((booking) => ({
  //   id: booking.id,
  //   start: new Date(booking.start_time),
  //   end: new Date(booking.end_time),
  //   title: `${booking.course_title} | Student: ${booking.student_name}`,
  //   color: stringToColor(booking.course_title),
  // }))

  const handleEventDelete = (eventId) => {
    setBookings(bookings.filter((booking) => booking.id !== eventId))
  }

  const EventComponent = ({ event }) => (
    <div className="calendar-event">
      {/* <button
        className="delete-booking-btn"
        onClick={() => handleEventDelete(event.id)}
      >
        <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
      </button> */}
      {event.title}
    </div>
  )

  return (
    <>
      <div className="calendar-header">
        <div className="title">
          <h3>Hey {user.first_name},</h3>
          <h4>Here are your appointments</h4>
        </div>
        {/* <button>Save changes</button> */}
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
            backgroundColor: event.color, // Use the color stored in the event
          },
        })}
        components={{
          event: EventComponent,
        }}
      />
      {isLoading && <Spinner text={"Fetching your appointments"} />}{" "}
      {/* Render Spinner if isLoading is true */}
    </>
  )
}
