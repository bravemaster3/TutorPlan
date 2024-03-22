import { useEffect, useState } from "react"
import Spinner from "../otherComponents/Spinner"
import { useFetchCourses } from "../utils"
import CourseIcon from "./CourseIcon"
import PersonCard from "./PersonCard"
import CloseIconSimple from "../otherComponents/CloseIconSimple"
import { API_BASE_URL } from "src/apiConfig"
import axios from "axios"

export default function MyDeskTutors() {
  // const { isLoading, courses, error } = useFetchCourses(
  //   localStorage.getItem("userId"),
  //   null
  // )

  const [uniqueTutors, setUniqueTutors] = useState([])
  const [isModalOpen, setIsModalAddOpen] = useState(false)
  const [selectedTutor, setSelectedTutor] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `${API_BASE_URL}/students/${localStorage.getItem(
      "userId"
    )}/tutors`
    axios
      .get(url)
      .then((response) => {
        // console.log("TUTORS", response.data)
        setUniqueTutors(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const toggleModal = () => {
    setIsModalAddOpen(!isModalOpen)
  }
  const handleTutorClick = (tutor) => {
    return () => {
      // console.log("You clicked on tutor", tutor)
      setSelectedTutor(tutor)
      toggleModal()
    }
  }

  // const uniqueTutorIds = [...new Set(courses.map((course) => course.tutor.id))]

  // Create an array of unique tutors
  // const uniqueTutors = uniqueTutorIds.map(
  //   (id) => courses.find((course) => course.tutor.id === id).tutor
  // )

  const numberTutors = uniqueTutors.length
  // console.log("UNIQUE TUTORS", courses)
  return (
    <>
      {isLoading ? (
        <Spinner text={"Loading your tutors"} />
      ) : (
        <>
          <h2>You have {numberTutors} tutors</h2>
          <div className="course-list">
            {uniqueTutors.map((tutor) => (
              <button
                className="course-btn"
                key={tutor.id}
                onClick={handleTutorClick(tutor)}
              >
                <div className="hover-group course-icon">
                  <CourseIcon
                    title={`${tutor.first_name} ${tutor.last_name}`}
                  />
                </div>
                <h5>{`${tutor.first_name} ${tutor.last_name}`}</h5>
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
            <h2>Tutor details</h2>
            <PersonCard user={selectedTutor} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
