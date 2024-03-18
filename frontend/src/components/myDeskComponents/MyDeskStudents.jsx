import { useState } from "react"
import Spinner from "../otherComponents/Spinner"
import useFetchAvailabilities, { useFetchCourses } from "../utils"
import CourseIcon from "./CourseIcon"
import PersonCard from "./PersonCard"
import CloseIconSimple from "../otherComponents/CloseIconSimple"

export default function MyDeskStudents() {
  // const { isLoading, courses, error } = useFetchCourses(
  //   localStorage.getItem("userId"),
  //   null
  // )

  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  )

  const { isLoading, availabilities, error } = useFetchAvailabilities(user.id)
  console.log(availabilities)

  const [isModalOpen, setIsModalAddOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState({})

  const toggleModal = () => {
    setIsModalAddOpen(!isModalOpen)
  }
  const handleCourseClick = (student) => {
    return () => {
      // console.log("You clicked on tutor", tutor)
      setSelectedStudent(student)
      toggleModal()
    }
  }

  const uniqueStudentIds = [
    ...new Set(availabilities.map((avail) => avail.studentDetails.id)),
  ]

  // Create an array of unique tutors
  const uniqueStudents = uniqueStudentIds.map(
    (id) =>
      availabilities.find((avail) => avail.studentDetails.id === id)
        .studentDetails
  )

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
                onClick={handleCourseClick(student)}
              >
                <div className="course-icon">
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
