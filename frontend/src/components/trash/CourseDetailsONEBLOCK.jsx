import React, { useEffect, useRef, useState } from "react"
import CloseIconSimple from "./CloseIconSimple"
import moment from "moment"

// import { DndProvider } from "react-dnd"
import { Calendar, momentLocalizer } from "react-big-calendar"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
// import { HTML5Backend } from "react-dnd-html5-backend"

import "react-big-calendar/lib/css/react-big-calendar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDeleteLeft,
  faEdit,
  faSave,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import CourseAdd from "./CourseAdd"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"

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
  const DnDCalendar = withDragAndDrop(Calendar)
  // Set up localizer
  const localizer = momentLocalizer(moment)
  const navigateTo = useNavigate()

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
        setIsEnrolled(idExists)
        setSeesCalendar(isTheTutor || idExists)
        setIsLoading(false)
      })
  }, [selectedCourse])

  const handleEnrollment = () => {
    if (!localStorage.getItem("isAuthenticated")) {
      if (window.confirm("Please login or sign up to continue")) {
        navigateTo("/login")
      }
    }
    if (
      JSON.parse(localStorage.getItem("user")).__class__ === "Tutor" &&
      !seesCalendar
    ) {
      if (
        window.confirm("Do you want to switch to a Student account to enroll?")
      ) {
        navigateTo("/login")
      }
    }
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
  // This should come from the database, to start from the existing
  const [events, setEvents] = useState([])
  const [bookings, setBookings] = useState([])
  const fetchAvail = async () => {
    const url = `${API_BASE_URL}/availability/${selectedCourse.id}/unbooked`
    // console.log(url)
    axios
      .get(url)
      .then((response) => {
        console.log("initiall availabilities", response.data)
        const InitialAvailabilities = response.data.map((availability) => {
          // const startDate = new Date(availability.day)
          // console.log("date format received", new Date(availability.start_time))
          const startTime = new Date(availability.start_time)
          const endTime = new Date(availability.end_time)
          const title = availability.booked ? "Taken " : "Available "
          return {
            id: availability.id,
            title,
            start: startTime,
            end: endTime,
          }
        })
        setEvents(InitialAvailabilities)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  useEffect(() => {
    fetchAvail()
    // console.log("is this fetched?", events)
    // }, [selectedCourse.id])
  }, [])

  // if (seesCalendar && !isCourseTutor) {
  //   const fetchBookings = async () => {
  //     console.log("reached here")
  //     const url = `${API_BASE_URL}/bookings/${
  //       selectedCourse.id
  //     }/course/${JSON.parse(
  //       localStorage.getItem("user")
  //     ).__class__.toLowerCase()}`
  //     console.log("bookings", url)
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         console.log("initiall bookings", response.data)
  //         const InitialBookings = response.data.filter((booking) => {
  //           return events.some((event) => event.id === booking.availability_id)
  //         })
  //         setBookings(InitialBookings)
  //       })
  //       .catch((error) => {
  //         alert("An error has occurred. Read more in the console")
  //         console.log(error)
  //       })
  //   }

  //   useEffect(() => {
  //     fetchBookings()
  //     // console.log("Bookings were fetched?", bookings)
  //   }, [])
  // }

  // const fetchBookings = async () => {
  //   try {
  //     const url = `${API_BASE_URL}/bookings/${selectedCourse.id}/course/${
  //       JSON.parse(localStorage.getItem("user")).id
  //     }/student`
  //     console.log("bookings", url)

  //     const response = await axios.get(url)

  //     console.log("initial bookings", response.data)

  //     const InitialBookings = response.data.filter((booking) => {
  //       return events.some((event) => event.id === booking.availability_id)
  //     })

  //     setBookings(InitialBookings)
  //   } catch (error) {
  //     alert("An error has occurred. Read more in the console")
  //     console.log(error)
  //   }
  // }

  // // Now, you need to call and await fetchBookings inside an async function
  // const handleFetchBookings = async () => {
  //   await fetchBookings()
  //   console.log("Bookings were fetched?", bookings)
  //   // The rest of your code that depends on the fetched bookings
  // }

  // if (seesCalendar && !isCourseTutor) {
  //   console.log("reached here") // This line should be executed

  //   handleFetchBookings()
  // }

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // console.log("reached here") // This line should be executed
        const url = `${API_BASE_URL}/bookings/${selectedCourse.id}/course/${
          JSON.parse(localStorage.getItem("user")).id
        }/student`
        // console.log("bookings", url)

        const response = await axios.get(url)

        console.log("initial bookings", response.data)

        const InitialBookings = response.data.filter((booking) => {
          return events.some((event) => event.id === booking.availability_id)
        })

        setBookings(InitialBookings)
      } catch (error) {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      }
    }

    const handleFetchBookings = async () => {
      await fetchBookings()
      console.log("Bookings were fetched?", bookings)
      // The rest of your code that depends on the fetched bookings
    }

    if (seesCalendar && !isCourseTutor) {
      console.log("reached here") // This line should be executed
      handleFetchBookings()
    }
  }, [seesCalendar, isCourseTutor, selectedCourse.id, events])
  // }, [seesCalendar, isCourseTutor])

  //**********************************************//
  // useEffect(() => {
  //   console.log("Events state:", events)
  // }, [events])

  const [autoId, setAutoId] = useState(0)

  const handleSelect = ({ start, end }) => {
    // const title = (window.prompt("New Event name") || "").trim() || "Available"
    if (isCourseTutor) {
      const title = "Available"
      setAutoId(autoId + 1)
      const id = autoId
      if (title)
        setEvents([
          ...events,
          {
            autoId,
            id,
            start,
            end,
            title,
          },
        ])
    }
    // console.log("new events", events)
  }

  const moveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    setEvents(nextEvents)
  }

  const resizeEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    setEvents(nextEvents)
  }

  const [defaultView, setDefaultView] = useState("month") // Initial default view

  const handleViewChange = (view) => {
    // Handle the view change event and update the default view
    setDefaultView(view)
  }

  const handleEventDelete = (eventId) => {
    // setEvents(events.filter((event) => event.autoId !== eventId))
    setEvents(events.filter((event) => event.id !== eventId))
  }

  const EventComponent = ({ event }) => (
    <div className="calendar-event">
      {event.title}
      {isCourseTutor ? (
        <button
          className="delete-booking-btn"
          // onClick={() => handleEventDelete(event.autoId)}
          onClick={() => handleEventDelete(event.id)}
        >
          <FontAwesomeIcon icon={faTrash} size="sm"></FontAwesomeIcon>
        </button>
      ) : (
        ""
      )}

      {seesCalendar && !isCourseTutor ? (
        <input
          type="checkbox"
          className="select-slot-checkbox"
          checked={bookings.some(
            (booking) => booking.availability_id === event.id
          )}
          onChange={(e) => handleCheckboxChange(e.target.checked, event.id)}
        />
      ) : (
        ""
      )}
    </div>
  )

  const postMultipleGeneric = (url, data) => {
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  const handleCalendarSave = () => {
    // console.log(events)
    if (isCourseTutor) {
      const listAvail = events.map((event) => {
        const day = event.start.toISOString().split("T")[0] // Extract YYYY-mm-dd from the date
        const course_id = selectedCourse.id
        const start_time = event.start
          .toISOString()
          .split(".")[0]
          .replace("T", " ")
        return { course_id, day, start_time }
      })
      const url = `${API_BASE_URL}/availability/${selectedCourse.id}`
      const data = { availability_attr: listAvail }
      console.log(data)
      postMultipleGeneric(url, data)
    }

    if (seesCalendar && !isCourseTutor) {
      // const listAvail = events.map((event) => {
      //   const day = event.start.toISOString().split("T")[0] // Extract YYYY-mm-dd from the date
      //   const course_id = selectedCourse.id
      //   const start_time = event.start
      //     .toISOString()
      //     .split(".")[0]
      //     .replace("T", " ")
      //   return { course_id, day, start_time }
      // })
      // // console.log("reshaped events", listAvail)
      // const url = `${API_BASE_URL}/availability/${selectedCourse.id}`
      // // console.log(url)
      // // for (const data of listAvail) {
      // //   console.log(data)
      // //   postAvailabilitySingle(url, data)
      // // }
      // const data = { availability_attr: listAvail }
      // console.log(data)
      // postAllAvailabilities(url, data)
      const data = {
        availability_ids: bookings.map((booking) => booking.availability_id),
        student_id: bookings[0].student_id,
      }
      console.log("ready to post bookings", data)
      const url = `${API_BASE_URL}/bookings`

      postMultipleGeneric(url, data)
    }
  }

  const handleCheckboxChange = (isChecked, eventId) => {
    if (isChecked) {
      // Handle checked state
      console.log(`Checkbox checked for event ${eventId}`)
      setBookings((prevBookings) => [
        ...prevBookings,
        {
          availability_id: eventId,
          student_id: JSON.parse(localStorage.getItem("user")).id,
        },
      ])

      console.log(bookings)
    } else {
      // Handle unchecked state
      console.log(`Checkbox unchecked for event ${eventId}`)
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.availability_id !== eventId)
      )
    }
  }

  //**********************************************//
  // const modalRef = useRef(null) ///THIS REF IS NOT WORKING YET
  // useEffect(() => {
  //   if (modalRef.current) {
  //     modalRef.current.scrollIntoView({ behavior: "smooth" })
  //     console.log("I eventually got here")
  //     modalRef.current.focus()
  //   }
  // }, [toggleModal])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="modal-bg">
      <div
        className="generic-form modal show specific-course-popup"
        tabIndex={0}
        // ref={modalRef}
      >
        <CloseIconSimple handleClose={toggleModal} />
        <div className="specific-course-popup-row1">
          <h1>Course details</h1>
          {/* {isCourseTutor ? (
            <FontAwesomeIcon icon={faSave} size="lg"></FontAwesomeIcon>
          ) : (
            ""
          )} */}
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
              // <DndProvider backend={HTML5Backend}>
              <DnDCalendar
                className="calendar-specific-course"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                // titleAccessor="title"
                selectable
                onSelectSlot={handleSelect}
                // onEventDrop={moveEvent}
                // resizable
                // onEventResize={resizeEvent}
                views={["month", "week", "day", "agenda"]}
                defaultView={defaultView}
                onView={handleViewChange}
                step={selectedCourse.duration}
                components={{
                  event: EventComponent,
                }}
              />
            ) : (
              // </DndProvider>
              <button className="enroll-btn" onClick={handleEnrollment}>
                <h2>Enroll to view calendar</h2>
              </button>
            )}
            {seesCalendar ? (
              <button
                className="save-calendar-btn"
                onClick={handleCalendarSave}
              >
                SAVE CHANGES
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
