import React, { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "src/apiConfig"
import CourseDetailsUI from "./CourseDetailsUI"
import Spinner from "src/components/otherComponents/Spinner.jsx"
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
  const [initialAvails, setInitialAvails] = useState([])
  const [events, setEvents] = useState([])
  const [initialBookings, setInitialBookings] = useState([])
  const [bookings, setBookings] = useState([])
  const navigateTo = useNavigate()
  const [updateOnSave, setUpdateOnSave] = useState(false)

  useEffect(() => {
    let idExists
    axios
      .get(`${API_BASE_URL}/courses/${selectedCourse.id}/students`)
      .then((response) => {
        const studentsInCourse = response.data
        idExists = studentsInCourse.some(
          (student) => student.id === localStorage.getItem("userId")
        )
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

  const fetchAvail = () => {
    const url = `${API_BASE_URL}/availability/${selectedCourse.id}`
    axios
      .get(url)
      .then((response) => {
        // console.log("initial availabilities", response.data)

        const InitialAvailabilities = response.data.map((availability) => {
          const startTime = new Date(availability.start_time)
          const endTime = new Date(availability.end_time)
          const title = availability.booked ? "Taken " : "Available "
          return {
            id: availability.id,
            title,
            start: startTime,
            end: endTime,
            booked: availability.booked,
          }
        })

        setInitialAvails(InitialAvailabilities)

        if (isCourseTutor) {
          setEvents(InitialAvailabilities)
        } else if (seesCalendar && !isCourseTutor) {
          fetchBookings()
            .then((initialBookings) => {
              // setBookings(bookings)
              // console.log("BOOKINGS", initialBookings)
              const filteredEvents = InitialAvailabilities.filter(
                (avail) =>
                  !avail.booked ||
                  initialBookings.some(
                    (booking) => booking.availability_id === avail.id
                  )
              )
              setEvents(filteredEvents)
              // console.log("filtered events with BOOKING", filteredEvents)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })
  }

  useEffect(() => {
    fetchAvail()
  }, [seesCalendar, isCourseTutor, selectedCourse.id]) //events is now deleted

  const fetchBookings = () => {
    return new Promise((resolve, reject) => {
      const url = `${API_BASE_URL}/bookings/${selectedCourse.id}/course/${
        JSON.parse(localStorage.getItem("user")).id
      }/student`

      axios
        .get(url)
        .then((response) => {
          // console.log("initial bookings", response.data)

          setInitialBookings(response.data)
          setBookings(response.data)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

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
            booked: false,
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

  const postMultipleGeneric = (url, data, type = null) => {
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // console.log(response)
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
      const newAvailsUrl = `${API_BASE_URL}/availability/${selectedCourse.id}`
      const newAvailsData = { availability_attr: newAvails }
      // console.log("ready to post availabilities", newAvailsData)
      // console.log("unchanged initials", initialAvails)
      if (newAvailsData.availability_attr.length > 0) {
        postMultipleGeneric(newAvailsUrl, newAvailsData, "Availabilities")
      }

      // getting the deleted availabilities
      const missingIds = initialAvails
        .filter(
          (initialAvail) =>
            !events.some((event) => event.start === initialAvail.start)
        )
        .map((missingAvail) => missingAvail.id)

      const delAvailsData = { availability_ids: missingIds }
      const delAvailsUrl = `${API_BASE_URL}/availability/${selectedCourse.id}`
      if (delAvailsData.availability_ids.length > 0) {
        deleteMultipleGeneric(delAvailsUrl, delAvailsData, "Availabilities")
      }
    }

    if (seesCalendar && !isCourseTutor) {
      // posting new bookings if any
      const newBookings = bookings.filter(
        (booking) =>
          !initialBookings.some(
            (initialBooking) => booking.id === initialBooking.id
          )
      )
      const newBookingsData = {
        availability_ids: newBookings.map((booking) => booking.availability_id),
        student_id: JSON.parse(localStorage.getItem("user")).id,
      }
      const newBookingsUrl = `${API_BASE_URL}/bookings`
      // console.log("ready to post NEW BOOKINGS", newBookingsData)
      if (newBookingsData.availability_ids.length > 0) {
        postMultipleGeneric(newBookingsUrl, newBookingsData, "Bookings")
      }
      // deleting unchecked bookings
      const missingBookingIds = initialBookings
        .filter(
          (initialBooking) =>
            !bookings.some((booking) => booking.id === initialBooking.id)
        )
        .map((booking) => booking.id)
      const delBookingsData = { booking_ids: missingBookingIds }
      const delBookingsUrl = `${API_BASE_URL}/bookings/${
        JSON.parse(localStorage.getItem("user")).id
      }`
      // console.log("ready to post DELETE BOOKINGS", delBookingsData)
      if (delBookingsData.booking_ids.length > 0) {
        deleteMultipleGeneric(delBookingsUrl, delBookingsData, "Bookings")
      }
    }
    /*** */

    setUpdateOnSave(!updateOnSave)
  }

  const handleCheckboxChange = (isChecked, eventId) => {
    // console.log("BOOKINGS WHEN CHECKING", bookings)
    if (isChecked) {
      // Handle checked state
      // console.log(`Checkbox checked for event ${eventId}`)
      setBookings((prevBookings) => [
        ...prevBookings,
        {
          availability_id: eventId,
          student_id: JSON.parse(localStorage.getItem("user")).id,
        },
      ])

      // console.log(bookings)
    } else {
      // Handle unchecked state
      // console.log(`Checkbox unchecked for event ${eventId}`)
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
