import React, { useState, useEffect } from "react"
import axios from "axios"
import { API_BASE_URL } from "src/apiConfig"
import Spinner from "components/otherComponents/Spinner"
import CourseCard from "components/coursesComponents/CourseCard"
import {
  useCourseDetails,
  useCourseForm,
  useFetchCourses,
} from "components/utils"
import moment from "moment"

import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import CourseDetails from "components/coursesComponents/CourseDetails"
import SearchBar from "src/components/coursesComponents/SearchBar"

export default function Courses() {
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

  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tutor.first_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      course.tutor.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tutor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tutor.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.course_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.duration.toString().includes(searchTerm.toLowerCase()) ||
      course.fee.toString().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
      // Add more fields as needed
    )
  })

  if (isLoading) {
    return <Spinner text={"Loading courses"} />
  }

  return (
    <>
      <div className="container-fluid courses-page">
        <h1>Browse our {numberCourses} available courses</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="courses-container">
          {filteredCourses.map((course) => (
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
