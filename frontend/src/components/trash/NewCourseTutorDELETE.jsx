import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
import { API_BASE_URL } from "../apiConfig"
import axios from "axios"
import CourseRegistration from "./CourseRegistration"
export default function NewCourseTutor({ toggleModal }) {
  const navigateTo = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // const [courseType, setCourseType] = useState("online")

  const handleCourseTypeChoice = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      course_type: e.target.value,
    }))
  }

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    course_type: "online",
    duration: 0,
    fee: 0,
  })

  // const handleAddCourse = (e) => handleAddCourse(e, toggleModal)
  const handleAddCourse = (e, toggleModal) => {
    e.preventDefault()
    // console.log(accountTypeSignUp) // Add this line
    const url = `${API_BASE_URL}/courses`
    console.log(url)
    const data = {
      ...formData,
      tutor_id: localStorage.getItem("userId"),
    }

    console.log("Here is the data being posted", data)
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occured. Read more in the console")
        console.log(error)
      })

    // navigateTo(-1)
    toggleModal()
  }

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
