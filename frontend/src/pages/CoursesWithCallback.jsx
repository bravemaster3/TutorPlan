import React, { useState, useEffect, useRef, useCallback } from "react"
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
import { useLocation } from "react-router-dom"

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

  const {
    formData,
    setFormData,
    handleChange,
    handleCourseTypeChoice,
    handleAddCourse,
    handleEditCourse,
  } = useCourseForm(toggleModal)

  const localizer = momentLocalizer(moment)

  const [pageNumber, setPageNumber] = useState(1)
  const [perPage, setPerPage] = useState(8) // Number of courses per page
  const [loadingMore, setLoadingMore] = useState(false)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialSearchTerm = queryParams.get("search") || ""
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

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
    )
  })

  const paginatedCourses = filteredCourses.slice(0, pageNumber * perPage)

  const observer = useRef()

  const lastCourseElementRef = useCallback(
    (node) => {
      if (loadingMore) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          filteredCourses.length > paginatedCourses.length
        ) {
          setLoadingMore(true)
          setTimeout(() => {
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
            setLoadingMore(false)
          }, 1000) // Simulating loading delay
        }
      })
      if (node) observer.current.observe(node)
    },
    [loadingMore, filteredCourses.length, paginatedCourses.length]
  )

  if (isLoading) {
    return <Spinner text={"Loading courses"} />
  }

  return (
    <>
      <div className="container-fluid courses-page">
        <h1>Browse our {numberCourses} available courses</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="courses-container">
          {paginatedCourses.map((course, index) => {
            if (paginatedCourses.length === index + 1) {
              return (
                <div ref={lastCourseElementRef} key={course.id}>
                  <CourseCard
                    key={course.id}
                    course={course}
                    setSelectedCourse={setSelectedCourse}
                    toggleModal={toggleModal}
                  />
                </div>
              )
            } else {
              return (
                <CourseCard
                  key={course.id}
                  course={course}
                  setSelectedCourse={setSelectedCourse}
                  toggleModal={toggleModal}
                />
              )
            }
          })}
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
