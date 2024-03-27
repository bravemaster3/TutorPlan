import { useEffect, useState } from "react"
import Spinner from "../otherComponents/Spinner"
import { useFetchAvailabilities, useFetchCourses } from "../utils"
import CourseIcon from "./CourseIcon"
import PersonCard from "./PersonCard"
import CloseIconSimple from "../otherComponents/CloseIconSimple"
import { API_BASE_URL } from "src/apiConfig"
import axios from "axios"

export default function MyDeskStudents() {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )

  const [isModalOpen, setIsModalAddOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState({})
  const [uniqueStudents, setUniqueStudents] = useState([])
  const [selectedTutor, setSelectedTutor] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const toggleModal = () => {
    setIsModalAddOpen(!isModalOpen)
  }
  const handleStudentClick = (student) => {
    return () => {
      // console.log("You clicked on tutor", tutor)
      setSelectedStudent(student)
      toggleModal()
    }
  }

  useEffect(() => {
    const url = `${API_BASE_URL}/tutors/${localStorage.getItem(
      "userId"
    )}/students`
    // console.log("URL", url)
    axios
      .get(url)
      .then((response) => {
        // console.log("TUTORS", response.data)
        setUniqueStudents(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const numberStudents = uniqueStudents.length
  // console.log("UNIQUE TUTORS", courses)
  return (
    <>
      {isLoading ? (
        <Spinner text={"Loading your students"} />
      ) : (
        <>
          <h2>You have {numberStudents} students</h2>
          <div className="course-list">
            {uniqueStudents.map((student) => (
              <button
                className="course-btn"
                key={student.id}
                onClick={handleStudentClick(student)}
              >
                <div className="hover-group course-icon">
                  <CourseIcon
                    title={`${student.first_name} ${student.last_name}`}
                  />
                </div>
                <h5>{`${student.first_name} ${student.last_name}`}</h5>
              </button>
            ))}
          </div>
        </>
      )}

      {isModalOpen ? (
        <div className="modal-bg">
          <div
            className="generic-form modal show specific-booking"
            tabIndex={0}
          >
            <CloseIconSimple handleClose={toggleModal} />
            <h2>Student details</h2>
            <PersonCard user={selectedStudent} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
