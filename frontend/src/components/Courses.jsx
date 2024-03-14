// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import { API_BASE_URL } from "../apiConfig"
// import Spinner from "./Spinner"
// import CourseSingle from "./CourseSingle"
// import CourseSpecific from "./CourseSpecific"
// import useCourseDetails, { useCourseForm } from "./utils"
// import moment from "moment"
// import { Calendar, momentLocalizer } from "react-big-calendar"

// export default function Courses() {
// const [courses, setCourses] = useState([])
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)
// const [selectedCourse, setSelectedCourse] = useState({})
// const [editCourse, setEditCourse] = useState(false)

// const toggleModal = () => {
//   // setSelectedCourse({})
//   setEditCourse(false)
//   setIsModalOpen(!isModalOpen)
// }

// const toggleEdit = () => {
//   setEditCourse(!editCourse)
// }

// const [isModalOpen, setIsModalOpen] = useState(false)

// const { formData, handleChange, handleCourseTypeChoice, handleAddCourse } =
//   useCourseForm(toggleModal)

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/courses`)
//       const coursesWithTutor = await Promise.all(
//         response.data.map(async (course) => {
//           const tutorResponse = await axios.get(
//             `${API_BASE_URL}/tutors/${course.tutor_id}`
//           )
//           return { ...course, tutor: tutorResponse.data }
//         })
//       )
//       setCourses(coursesWithTutor)
//       setLoading(false)
//     } catch (error) {
//       setError(error)
//       setLoading(false)
//     }
//   }

//   fetchData()
// }, [])

// if (loading) {
//   return <Spinner />
// }

// if (error) {
//   return <div>Error: {error.message}</div>
// }

import React, { useState, useEffect } from "react"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import Spinner from "./Spinner"
import CourseCard from "./CourseCard"
import { useCourseDetails, useCourseForm, useFetchCourses } from "./utils"
import moment from "moment"

import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import CourseDetails from "./CourseDetails"

export default function Courses() {
  // const {
  //   isLoading,
  //   courses,
  //   selectedCourse,
  //   setSelectedCourse,
  //   isModalOpen, // Use isModalOpen from the useCourseDetails hook
  //   toggleModal,
  //   toggleEdit,
  //   editCourse,
  //   error,
  // } = useCourseDetails()

  const { isLoading, courses, error } = useFetchCourses()
  const [numberCourses, setNumberCourses] = useState(courses.length)
  useEffect(() => {
    setNumberCourses(courses.length)
  }, [courses])

  const {
    selectedCourse,
    setSelectedCourse,
    toggleModal,
    toggleEdit,
    editCourse,
    isModalOpen,
  } = useCourseDetails()

  // console.log(isModalOpen)

  const {
    formData,
    setFormData,
    handleChange,
    handleCourseTypeChoice,
    handleAddCourse,
    handleEditCourse,
  } = useCourseForm(toggleModal)

  // Rest of your component code...

  const localizer = momentLocalizer(moment)

  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 2, 7, 10, 0),
      end: new Date(2024, 2, 7, 12, 0),
    },
    // Add more events as needed
  ]

  if (isLoading) {
    return <Spinner text={"Loading courses"} />
  }

  return (
    <>
      <div className="container-fluid courses-page">
        <h1>Browse our {numberCourses} available courses</h1>
        <div className="courses-container">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              setSelectedCourse={setSelectedCourse}
              toggleModal={toggleModal}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <CourseDetails
          selectedCourse={selectedCourse}
          toggleModal={toggleModal}
          toggleEdit={toggleEdit}
          editCourse={editCourse}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleCourseTypeChoice={handleCourseTypeChoice}
          handleAddCourse={(e) => handleEditCourse(e, selectedCourse.id)}
        />
      )}
    </>
  )
}
