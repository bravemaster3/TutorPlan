import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
export default function NewCourseTutor() {
  return (
    <>
      <CourseRegistration />
    </>
  )
}

function CourseRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="title">
        <h2>Add a course!</h2>
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="course-name">Course Name</label>
          <input
            type="text"
            id="course-name"
            placeholder="e.g. Piano, Guitar, English"
            name="course_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="e.g. Languages, Mathematics"
            name="category"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Brief description of the course"
            name="description"
          />
        </div>

        <div className="form-group">
          <label>How will you conduct your lessons?</label>
          <br />
          <div className="radio-group">
            <label htmlFor="online">Online</label>
            <input
              type="radio"
              id="online"
              name="course_type"
              value="Online"
              defaultChecked
            />

            <label htmlFor="physical">Physical</label>
            <input
              type="radio"
              id="physical"
              name="course_type"
              value="Physical"
            />

            <label htmlFor="both">Both</label>
            <input type="radio" id="both" name="course_type" value="Both" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            placeholder="Duration in minutes"
            name="duration"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fee">Fee</label>
          <input type="number" id="fee" placeholder="Fee in $" name="fee" />
        </div>
        <div className="button-group">
          <button type="submit" className="sign-in">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  )
}
