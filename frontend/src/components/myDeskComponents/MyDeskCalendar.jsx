import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
import { stringToColor } from "src/components/utils"
import { API_BASE_URL } from "src/apiConfig"
import axios from "axios"

import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"
import {
  useCourseDetails,
  useCourseForm,
  useFetchCourses,
} from "src/components/utils"
import CourseDetails from "src/components/coursesComponents/CourseDetails"
import CloseIconSimple from "src/components/otherComponents/CloseIconSimple"
import NewCourseTutor from "./NewCourseTutor"
import Spinner from "src/components/otherComponents/Spinner"

export default function MyDeskCalendar() {
  const localizer = momentLocalizer(moment)
  const [bookings, setBookings] = useState([])
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )
  const [selectedEvent, setSelectedEvent] = useState(null) // State to store the selected event
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const url = `${API_BASE_URL}/bookings/${user.id}/student`
        const response = await axios.get(url)
        console.log("URL", url)
        console.log("Student's bookings", response)

        const initialBookings = response.data
        // Fetch availability details for each booking
        const bookingsWithAvailabilityDetails = await Promise.all(
          initialBookings.map(async (booking) => {
            const availabilityUrl = `${API_BASE_URL}/availability/${booking.availability_id}/available`
            const availabilityResponse = await axios.get(availabilityUrl)
            const availabilityDetails = availabilityResponse.data

            // Fetch course details for each availability
            const courseUrl = `${API_BASE_URL}/courses/${availabilityDetails.course_id}`
            const courseResponse = await axios.get(courseUrl)
            const courseDetails = courseResponse.data

            // Fetch tutor details for each course
            const tutorUrl = `${API_BASE_URL}/tutors/${courseDetails.tutor_id}`
            const tutorResponse = await axios.get(tutorUrl)
            const tutorDetails = tutorResponse.data

            // Combine all details and return
            return {
              ...booking,
              availabilityDetails,
              courseDetails,
              tutorDetails,
            }
          })
        )

        setBookings(bookingsWithAvailabilityDetails)
        setIsLoading(false)
      } catch (error) {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      }
    }

    const handleFetchBookings = async () => {
      await fetchBookings()
      console.log("Bookings were fetched?", bookings)
    }
    handleFetchBookings()
  }, [])

  const events = bookings.map((booking) => ({
    id: booking.id,
    start: new Date(booking.availabilityDetails.start_time),
    end: new Date(booking.availabilityDetails.end_time),
    title: `${booking.courseDetails.title} with ${booking.tutorDetails.first_name} ${booking.tutorDetails.last_name}`,
    color: stringToColor(booking.courseDetails.title),
    course: { ...booking.courseDetails, tutor: { ...booking.tutorDetails } },
    // tutor: booking.tutorDetails,
  }))

  const handleEventDelete = (eventId) => {
    setBookings(bookings.filter((booking) => booking.id !== eventId))
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event) // Set the selected event in state
    toggleModal()
  }
  ////////////////

  const [isModalAddOpen, setIsModalAddOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  const toggleModalAdd = () => {
    setIsModalAddOpen(!isModalAddOpen)
  }

  const {
    selectedCourse,
    setSelectedCourse,
    toggleModal,
    toggleEdit,
    editCourse,
    isModalOpen,
  } = useCourseDetails()

  const {
    formData,
    setFormData,
    handleChange,
    handleCourseTypeChoice,
    handleAddCourse,
    handleEditCourse,
  } = useCourseForm(toggleModal)

  const handleCourseClick = (course) => {
    return () => {
      setSelectedCourse(course)
      toggleModal()
    }
  }
  ///////////////////
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
        {/* <button>Save changes</button> */}
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="calendar"
        selectable
        onSelectEvent={handleEventClick}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color, // Use the color stored in the event
          },
        })}
        components={{
          event: EventComponent,
        }}
        defaultView="agenda"
      />

      {isLoading ? (
        <Spinner text={"Fetching your appointments"} />
      ) : (
        <>
          {selectedEvent && isModalOpen && (
            <CourseDetails
              selectedCourse={selectedEvent.course}
              toggleModal={toggleModal}
              toggleEdit={toggleEdit}
              editCourse={editCourse}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleCourseTypeChoice={handleCourseTypeChoice}
              handleAddCourse={(e) =>
                handleEditCourse(e, selectedEvent.course.id)
              }
            />
          )}
        </>
      )}
    </>
  )
}
