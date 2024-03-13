import axios from "axios"
import { useEffect, useState } from "react"
import { API_BASE_URL } from "../apiConfig"

export default function CourseCard({ course, setSelectedCourse, toggleModal }) {
  const [tutor, setTutor] = useState([])

  const handleCourseClick = () => {
    setSelectedCourse(course)
    toggleModal()
  }
  return (
    <div className="course-card">
      <div className="course-content">
        <div className="course-header">
          <button onClick={handleCourseClick}>
            <div className="course-title" title={course.title}>
              {course.title}
            </div>
            <div className="course-price">${course.fee}</div>
          </button>
        </div>

        <div className="course-details">
          <div className="course-description">
            {course.description || "No description available."}
            <p>
              <strong>Course duration: </strong>
              {course.duration} min
            </p>
          </div>
          <div className="instructor-info">
            <img
              className="instructor-photo"
              src="https://via.placeholder.com/64x64"
              alt="Instructor"
            />
            <div className="instructor-details">
              <div className="instructor-name">{`${course.tutor.first_name} ${course.tutor.last_name}`}</div>
              <div className="instructor-location">{`${
                course.tutor.city || "City"
              }, ${course.tutor.country}`}</div>
            </div>
          </div>
          <div className="course-type">
            {course.course_type === "remote" ||
            course.course_type === "online" ||
            course.course_type === "both" ? (
              <div className="online">online</div>
            ) : (
              ""
            )}

            {course.course_type === "physical" ||
            course.course_type === "in-person" ||
            course.course_type === "both" ? (
              <div className="physical">physical</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
