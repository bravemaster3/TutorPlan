import React, { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import CourseDetailsUI from "./CourseDetailsUI"
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
  // Other props...
}) {
  const [isCourseTutor, setIsCourseTutor] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [seesCalendar, setSeesCalendar] = useState(false)
  const [events, setEvents] = useState([])
  const [bookings, setBookings] = useState([])
  const navigateTo = useNavigate()
  const [updateOnSave, setUpdateOnSave] = useState(false)
  const [initialAvails, setInitialAvails] = useState([])

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
        setInitialAvails(InitialAvailabilities)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  useEffect(() => {
    fetchAvail()
  }, [])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const url = `${API_BASE_URL}/bookings/${selectedCourse.id}/course/${
          JSON.parse(localStorage.getItem("user")).id
        }/student`

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
    }

    if (seesCalendar && !isCourseTutor) {
      console.log("reached here")
      handleFetchBookings()
    }
  }, [seesCalendar, isCourseTutor, selectedCourse.id, events])

  const [autoId, setAutoId] = useState(0)

  const handleSelect = ({ start, end }) => {
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
    setDefaultView(view)
  }

  const handleEventDelete = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  //   const EventComponent = ({ event }) => (
  //     <div className="calendar-event">
  //       {event.title}
  //       {isCourseTutor ? (
  //         <button
  //           className="delete-booking-btn"
  //           onClick={() => handleEventDelete(event.id)}
  //         >
  //           <FontAwesomeIcon icon={faTrash} size="sm"></FontAwesomeIcon>
  //         </button>
  //       ) : (
  //         ""
  //       )}

  //       {seesCalendar && !isCourseTutor ? (
  //         <input
  //           type="checkbox"
  //           className="select-slot-checkbox"
  //           checked={bookings.some(
  //             (booking) => booking.availability_id === event.id
  //           )}
  //           onChange={(e) => handleCheckboxChange(e.target.checked, event.id)}
  //         />
  //       ) : (
  //         ""
  //       )}
  //     </div>
  //   )

  const postMultipleGeneric = (url, data, type = null) => {
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
        if (response.status.toString().startsWith("2")) {
          type !== null
            ? alert(`${type} were saved successfully`)
            : alert("Operation was successful")
        }
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  const deleteMultipleGeneric = (url, data, type = null) => {
    axios
      .delete(url, {
        headers: { "Content-Type": "application/json" },
        data: data,
      })
      .then((response) => {
        console.log(response)
        if (response.status.toString().startsWith("2")) {
          type !== null
            ? alert(`${type} were deleted successfully`)
            : alert("Operation was successful")
        }
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  const handleCalendarSave = () => {
    // console.log(events)
    if (isCourseTutor) {
      console.log("Availabilities before preparation", events)

      //Getting the new availabilities
      const newAvails = events
        .filter(
          (event) => !initialAvails.some((avail) => event.start === avail.start)
        )
        .map((event) => {
          const day = event.start.toISOString().split("T")[0] // Extract YYYY-mm-dd from the date
          const course_id = selectedCourse.id
          const start_time = event.start
            .toISOString()
            .split(".")[0]
            .replace("T", " ")
          return { course_id, day, start_time }
        })
      const urlPost = `${API_BASE_URL}/availability/${selectedCourse.id}`
      const newAvailsData = { availability_attr: newAvails }
      console.log("ready to post availabilities", newAvailsData)
      console.log("unchanged initials", initialAvails)
      if (newAvailsData.availability_attr.length > 0) {
        postMultipleGeneric(urlPost, newAvailsData, "Availabilities")
      }

      // getting the deleted availabilities
      const missingIds = initialAvails
        .filter(
          (initialAvail) =>
            !events.some((event) => event.start === initialAvail.start)
        )
        .map((missingAvail) => missingAvail.id)

      const delAvailsData = { availability_ids: missingIds }
      const urlDel = `${API_BASE_URL}/availability/${selectedCourse.id}`
      if (delAvailsData.availability_ids.length > 0) {
        deleteMultipleGeneric(urlDel, delAvailsData, "Availabilities")
      }
    }

    if (seesCalendar && !isCourseTutor) {
      const data = {
        availability_ids: bookings.map((booking) => booking.availability_id),
        student_id: JSON.parse(localStorage.getItem("user")).id, //bookings[0].student_id,
      }
      console.log("ready to post bookings", data)
      const url = `${API_BASE_URL}/bookings`

      if (data.availability_ids.length > 0) {
        postMultipleGeneric(url, data, "Bookings")
      }
    }

    setUpdateOnSave(!updateOnSave)
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

  if (isLoading) {
    return <Spinner />
  }

  return (
    <CourseDetailsUI
      selectedCourse={selectedCourse}
      toggleModal={toggleModal}
      toggleEdit={toggleEdit}
      editCourse={editCourse}
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
      handleCourseTypeChoice={handleCourseTypeChoice}
      handleAddCourse={handleAddCourse}
      seesCalendar={seesCalendar}
      isCourseTutor={isCourseTutor}
      events={events}
      handleSelect={handleSelect}
      moveEvent={moveEvent}
      resizeEvent={resizeEvent}
      defaultView={defaultView}
      handleViewChange={handleViewChange}
      isLoading={isLoading}
      handleEnrollment={handleEnrollment}
      handleCalendarSave={handleCalendarSave}
      bookings={bookings}
      handleEventDelete={handleEventDelete}
      handleCheckboxChange={handleCheckboxChange}
    />
  )
}
