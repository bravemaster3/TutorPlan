import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"
import NewCourseTutor from "./NewCourseTutor"
import CloseIconSimple from "./CloseIconSimple"
import { API_BASE_URL } from "../apiConfig"

export default function MyDeskCoursesTutor() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${API_BASE_URL}/tutors/${localStorage.getItem(
          "userId"
        )}/courses`
        const response = await axios.get(url)
        setCourses(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const numberCourses = courses.length

  return (
    <>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          {" "}
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
              <div className="modal-bg">
                <div className="generic-form modal show">
                  <CloseIconSimple handleClose={toggleModal} />
                  <NewCourseTutor toggleModal={toggleModal} />
                  {/* <button onClick={toggleModal}>Close</button> */}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
