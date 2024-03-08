import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

export function stringToColor(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = "#"
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      color += ("00" + value.toString(16)).substr(-2)
    }
    return color
  }

export function  handleAddCourse (e, toggleModal) {
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


// export const addCourseFormUtils = ({toggleModal, setFormData}) => {
//   const navigateTo = useNavigate();

//   const handleChange = (e, formData, setFormData) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCourseTypeChoice = (e, formData, setFormData) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       course_type: e.target.value,
//     }));
//   };

//   const handleAddCourse = (e, formData, toggleModal) => {
//     e.preventDefault();
//     const url = `${API_BASE_URL}/courses`;
//     const data = {
//       ...formData,
//       tutor_id: localStorage.getItem("userId"),
//     };

//     console.log("Here is the data being posted", data);
//     axios
//       .post(url, data, {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         alert("An error has occurred. Read more in the console");
//         console.log(error);
//       });

//     toggleModal();
//   };

//   const initializeFormData = () => {
//     return {
//       title: "",
//       category: "",
//       description: "",
//       course_type: "online",
//       duration: 0,
//       fee: 0,
//     };
//   };

//   return {
//     navigateTo,
//     handleChange,
//     handleCourseTypeChoice,
//     handleAddCourse,
//     initializeFormData,
//   };
// };


// useCourseForm.js

export const useCourseForm = (toggleModal) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    course_type: "online",
    duration: 0,
    fee: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCourseTypeChoice = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      course_type: e.target.value,
    }))
  }

  const handleAddCourse = (e) => {
    e.preventDefault()
    const data = {
      ...formData,
      tutor_id: localStorage.getItem("userId"),
    }

    axios
      .post(`${API_BASE_URL}/courses`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })

    toggleModal()
  }

  return { formData, handleChange, handleCourseTypeChoice, handleAddCourse }
}
