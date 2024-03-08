// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faEye,
//   faEyeSlash,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons"
// import CloseIcon from "./CloseIcon"
// import { API_BASE_URL } from "../apiConfig"
// import axios from "axios"
import CourseRegistration from "./CourseRegistration"
import { useCourseForm } from "./utils"

export default function NewCourseTutor({ toggleModal }) {
  const { formData, handleChange, handleCourseTypeChoice, handleAddCourse } =
    useCourseForm(toggleModal)

  return (
    <>
      <CourseRegistration
        formData={formData}
        handleChange={handleChange}
        handleCourseTypeChoice={handleCourseTypeChoice}
        handleAddCourse={handleAddCourse}
        formTitle="Add a course!"
        editMode={true}
      />
    </>
  )
}
