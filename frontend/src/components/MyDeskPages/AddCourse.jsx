import React, { useState } from 'react'
import { BaseForm } from '../Primitives';
import { useNavigate } from 'react-router';

const AddCourse = () => {
  const navigateTo = useNavigate()
  const [user, setUser] = useState("student")
  const [formData, setFormData] = useState({
    /*     first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        password: "",*/
    account_type: user,
  })
  /*   const handleChoice = (e) => {
      // console.log(e.target.value)
      // console.log("HANDLECHOICE: I HAVE BEEN TRIGGERED")
      //  setUser(e.target.value)
      //  handleChange(e)
    } */
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'account_type') {
      setUser(e.target.value)
    }
    /*   if (name === "password") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: md5(value),
        }))
      } else { */
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    /*  } */
  }
  const handleSignUp = (e) => {
    e.preventDefault()
    // console.log(accountTypeSignUp) // Add this line
    const url = `${API_BASE_URL}/${accountTypeSignUp}s`
    console.log(formData)
    /*  const data = formData */
    /*   axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          alert("An error has occured. Signup was unsuccessful")
          console.log(error)
        }) */

    navigateTo("/login")
  }
  const AddCourseProps = {
    formClasses: 'flex font-worksans flex-col border mx-auto justify-center   p-8 rounded-md',
    title: {
      className: 'text-[40px] font-roboto font-bold text-center',
      label: 'Add Course!',
    },
    subtitle: {
      className: ' text-center mb-4 font-[500]',
      label: 'You are signing in as a',
    },
    handleFormSubmit: handleSignUp,
    formFields: [
      {
        label: { label: 'Course Name', className: 'font-[500]' },
        id: 'courseName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
        placeholder: '',
        name: "title",
        onChange: handleChange
      },
      {
        label: { label: 'Category', className: 'font-[500]' },
        id: 'category',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "category",
        onChange: handleChange
      },
      {
        label: { label: 'Duration', className: 'font-[500]' },
        id: 'duration',
        type: 'number',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Duration in minutes',
        name: "duration",
        onChange: handleChange
      },
      {
        label: { label: 'Fee', className: 'font-[500]' },
        id: 'fee',
        type: 'number',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Fee in $',
        name: "fee",
        onChange: handleChange
      },

      // Add more form fields as needed
    ],
    textField: {
      id: "description",

      type: "text",
      placeholder: "Provide a brief description of the course",
      label: { label: "Description", labelClass: " font-[500]" },
      name: "description",
      /* value: formData.city,
      disabled: !editMode, */

    },
    radioGroup: {
      className: 'mb-4 mt-4 font-[500]',
      label: 'How will you conduct your lessons?',
      optionsClassName: 'flex flex-col   justify-evenly',
      options: [
        {
          label: { label: 'Online', className: 'font-normal' },
          id: 'online',
          type: 'radio',
          name: 'course_type',
          value: 'online',
          inputClasses: "ml-2",
          onChange: handleChange,
          defaultChecked: true
        },
        {
          label: { label: 'In Person(Physical)', className: 'font-normal text-nowrap' },
          id: 'physical',
          type: 'radio',
          name: 'course_type',
          value: 'physical',
          onChange: handleChange
        },
        {
          label: { label: 'Both', className: 'font-normal' },
          id: 'both',
          type: 'radio',
          name: 'course_type',
          value: 'both',
          onChange: handleChange
        },
      ],
    },
    formButton: {
      id: 'submit-btn',
      className: ' font-worksans bg-blue-600 text-white px-[24px] py-[8px] rounded-[8px] font-[500]',
      label: 'ADD COURSE',
    },

  };
  return (
    <main>


      <BaseForm{...AddCourseProps} /></main>
  )
}


export default AddCourse
