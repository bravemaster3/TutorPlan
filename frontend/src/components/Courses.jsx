import CourseSingle from "./CourseSingle"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import React, { useState, useEffect } from "react"
import Spinner from "./Spinner"
import CloseIconSimple from "./CloseIconSimple"
import NewCourseTutor from "./NewCourseTutor"
import CourseRegistration from "./CourseRegistration"
import { useCourseForm } from "./utils"
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editCourse, setEditCourse] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState({})

  const toggleEdit = () => {
    setEditCourse(!editCourse)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setEditCourse(false)
  }

  const { formData, handleChange, handleCourseTypeChoice, handleAddCourse } =
    useCourseForm(toggleModal)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/courses`)
        const coursesWithTutor = await Promise.all(
          response.data.map(async (course) => {
            const tutorResponse = await axios.get(
              `${API_BASE_URL}/tutors/${course.tutor_id}`
            )
            return { ...course, tutor: tutorResponse.data }
          })
        )
        setCourses(coursesWithTutor)
        // console.log(
        //   `This is a list of all courses: ${JSON.stringify(response.data)}`
        // )
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, []) // Empty dependency array ensures the effect runs only once when the component mounts

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // Set up localizer
  const localizer = momentLocalizer(moment)

  // Define events
  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 2, 7, 10, 0),
      end: new Date(2024, 2, 7, 12, 0),
    },
    // Add more events as needed
  ]

  return (
    <>
      <div className="container-fluid courses-page">
        <h4>Available courses</h4>
        <div className="courses-container">
          {courses.map((course) => (
            <CourseSingle
              key={course.id}
              course={course}
              setSelectedCourse={setSelectedCourse}
              toggleModal={toggleModal}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-bg">
          <div className="generic-form modal show specific-course-popup">
            <CloseIconSimple handleClose={toggleModal} />
            <div className="specific-course-popup-row1">
              <h1>Course details</h1>
            </div>
            <div className="specific-course-popup-row2">
              <div>
                <CourseRegistration
                  formData={formData}
                  handleChange={handleChange}
                  handleCourseTypeChoice={handleCourseTypeChoice}
                  handleAddCourse={handleAddCourse}
                  formTitle={
                    <button onClick={toggleEdit}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  }
                  initialValues={selectedCourse}
                  editMode={editCourse}
                />
              </div>

              <div className="calendar-specific-course-div">
                {/* <h4>Course calendar</h4> */}
                <Calendar
                  className="calendar-specific-course"
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
