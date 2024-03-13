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
import CourseAdd from "./CourseAdd"
import { useCourseForm } from "./utils"

export default function NewCourseTutor({ toggleModal }) {
  const { formData, handleChange, handleCourseTypeChoice, handleAddCourse } =
    useCourseForm(toggleModal)

  return (
    <>
      <CourseAdd
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
