import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import * as Icons from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import {
  useCourseDetails,
  useCourseForm,
  useFetchCourses,
} from "components/utils"
import CourseIcon from "./CourseIcon"
import CourseDetails from "components/coursesComponents/CourseDetails"
import Spinner from "components/otherComponents/Spinner"

export default function MyDeskCourses() {
  const navigateTo = useNavigate()
  const [isModalAddOpen, setIsModalAddOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  const toggleModalAdd = () => {
    setIsModalAddOpen(!isModalAddOpen)
  }

  const { isLoading, courses, error } = useFetchCourses(
    localStorage.getItem("userId"),
    null
  )

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

  const numberCourses = courses.length

  return (
    <>
      {isLoading ? (
        <Spinner text={"Loading your courses"} />
      ) : (
        <>
          {/* <div className="mydesk-content"> */}
          <h2>You are taking {numberCourses} courses</h2>
          <div className="course-list">
            {courses.map((course) => (
              <button
                className="course-btn"
                key={course.id}
                onClick={handleCourseClick(course)}
              >
                <div className="hover-group course-icon">
                  <CourseIcon title={course.title} />
                </div>
                <h5>{course.title}</h5>
              </button>
            ))}
            <button
              className="course-btn"
              onClick={() => navigateTo("/courses")}
            >
              <div className="course-icon add">
                <Icons.FaPlus />
              </div>
              <h5>Add course</h5>
            </button>
          </div>

          {isModalAddOpen && (
            <div className="modal-bg">
              <div className="generic-form modal show">
                <CloseIconSimple handleClose={toggleModalAdd} />
                <NewCourseTutor toggleModal={toggleModalAdd} />
                {/* <button onClick={toggleModal}>Close</button> */}
              </div>
            </div>
          )}

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
          {/* </div> */}
        </>
      )}
    </>
  )
}
