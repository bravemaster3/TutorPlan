import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"
import NewCourseTutor from "./NewCourseTutor"
import CloseIconSimple from "./CloseIconSimple"

export default function MyDeskCoursesTutor() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const courses = [
    {
      id: 1,
      title: "Piano lessons",
      duration: 120,
      description:
        "In this lesson, you will learn to be a professional concert player in 2 years, thanks to my new method...",
    },
  ]
  const numberCourses = courses.length

  return (
    <>
      {/* <div className="mydesk-content"> */}
      <h3>You are teaching {numberCourses} courses</h3>
      <div className="course-list">
        {courses.map((course) => (
          <button className="course-btn" key={course.id}>
            <div className="course-icon">
              <CourseIcon title={course.title} />
            </div>
            <h5>{course.title}</h5>
          </button>
        ))}
        <button className="course-btn" onClick={toggleModal}>
          <div className="course-icon add">
            <Icons.FaPlus />
          </div>
          <h5>Add course</h5>
        </button>

        {isModalOpen && (
          <div className="generic-form modal show">
            <CloseIconSimple handleClose={toggleModal} />
            <NewCourseTutor />
            {/* <button onClick={toggleModal}>Close</button> */}
          </div>
        )}
      </div>
    </>
  )
}
