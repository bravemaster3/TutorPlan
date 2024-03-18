import React, { useEffect, useState } from "react"
import CloseIconSimple from "./CloseIconSimple"
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons"
import CourseAdd from "./CourseAdd"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import Spinner from "./Spinner"
import { stringToColor } from "./utils"

export default function CourseDetails({
  selectedCourse,
  toggleModal,
  toggleEdit,
  editCourse,
  formData,
  setFormData,
  handleChange,
  handleCourseTypeChoice,
  handleAddCourse,
}) {
  // console.log(selectedCourse)
  // Set up localizer
  const localizer = momentLocalizer(moment)

  const [isCourseTutor, setIsCourseTutor] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // useEffect(() => {
  //   const isTheTutor =
  //     selectedCourse.tutor_id === localStorage.getItem("userId")
  //   setIsCourseTutor(isTheTutor)
  //   setSeesCalendar(isTheTutor)
  // }, [selectedCourse])

  const [seesCalendar, setSeesCalendar] = useState(false)
  useEffect(() => {
    let idExists
    axios
      .get(`${API_BASE_URL}/courses/${selectedCourse.id}/students`)
      .then((response) => {
        const studentsInCourse = response.data
        idExists = studentsInCourse.some(
          (student) => student.id === localStorage.getItem("userId")
        )
        // setSeesCalendar(idExists)
        // console.log(selectedCourse)
        const isTheTutor =
          selectedCourse.tutor_id === localStorage.getItem("userId")
        setIsCourseTutor(isTheTutor)
        setSeesCalendar(isTheTutor || idExists)
        setIsLoading(false)
      })
  }, [selectedCourse])

  const handleEnrollment = () => {
    if (!seesCalendar && localStorage.getItem("accountType") === "student") {
      const url = `${API_BASE_URL}/students/${localStorage.getItem(
        "userId"
      )}/courses/${selectedCourse.id}`
      const data = {
        student_id: localStorage.getItem("userId"),
        course_id: selectedCourse.id,
      }
      axios
        .post(url, data)
        .then((response) => {
          console.log(response)
          setIsEnrolled(true)
          setSeesCalendar(true)
          alert("You are now enrolled in the course")
        })
        .catch((error) => {
          alert("An Error has occurred")
          console.log(error)
        })
    }
  }
  // Define events
  // const events = [
  //   {
  //     title: "Event 1",
  //     start: new Date(2024, 2, 7, 10, 0),
  //     end: new Date(2024, 2, 7, 12, 0),
  //   },
  //   // Add more events as needed
  // ]

  const [bookings, setBookings] = useState([
    {
      id: 1,
      course_title: "Piano lessons",
      tutor_name: "John Doe",
      start_time: "2024-02-29 13:00:00",
      end_time: "2024-02-29 15:00:00",
    },
    {
      id: 2,
      course_title: "Fun math",
      tutor_name: "Janette Mate",
      start_time: "2024-03-01 09:00:00",
      end_time: "2024-03-01 13:00:00",
    },

    {
      id: 3,
      course_title: "Fun math",
      tutor_name: "Janette Mate",
      start_time: "2024-03-02 17:00:00",
      end_time: "2024-03-02 19:00:00",
    },
  ])

  const events = bookings.map((booking) => ({
    id: booking.id,
    start: new Date(booking.start_time),
    end: new Date(booking.end_time),
    title: `${booking.course_title} with ${booking.tutor_name}`,
    color: stringToColor(booking.course_title),
  }))

  const handleEventDelete = (eventId) => {
    setBookings(bookings.filter((booking) => booking.id !== eventId))
  }

  const EventComponent = ({ event }) => (
    <div className="calendar-event">
      <button
        className="delete-booking-btn"
        onClick={() => handleEventDelete(event.id)}
      >
        <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
      </button>
      {event.title}
    </div>
  )

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="modal-bg">
      <div className="generic-form modal show specific-course-popup">
        <CloseIconSimple handleClose={toggleModal} />
        <div className="specific-course-popup-row1">
          <h1>Course details</h1>
        </div>
        <div className="specific-course-popup-row2">
          <div>
            <CourseAdd
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleCourseTypeChoice={handleCourseTypeChoice}
              handleAddCourse={handleAddCourse}
              formTitle={
                isCourseTutor ? (
                  <button onClick={toggleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                ) : (
                  ""
                )
              }
              initialValues={selectedCourse}
              editMode={editCourse}
            />
          </div>

          <div className="calendar-specific-course-div">
            {/* <h4>Course calendar</h4> */}
            {seesCalendar ? (
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
            ) : (
              <button className="enroll-btn" onClick={handleEnrollment}>
                <h2>Enroll to view calendar</h2>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
