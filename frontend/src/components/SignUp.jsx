import React, { useState } from 'react'
import { BaseForm } from './Primitives'
import { Navigate, useNavigate } from 'react-router'

const SignUp = () => {
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

  console.log(formData)
  const SignUpProps = {
    formClasses: 'flex baseform font-worksans flex-col w-[350px] mx-auto justify-center   p-8 rounded-md',
    title: {
      className: 'text-[40px] font-roboto font-bold text-center',
      label: 'Join Us!',
    },
    subtitle: {
      className: ' text-center mb-4 font-[500]',
      label: 'You are signing in as a',
    },
    handleFormSubmit: handleSignUp,
    formFields: [
      {
        label: { label: 'First Name', className: 'font-[500]' },
        id: 'firstName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
        placeholder: '',
        name: "first_name",
        onChange: handleChange
      },
      {
        label: { label: 'Last Name', className: 'font-[500]' },
        id: 'lastName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "last_name",
        onChange: handleChange
      },
      {
        label: { label: 'Email', className: 'font-[500]' },
        id: 'email',
        type: 'email',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Enter your email',
        name: "email",
        onChange: handleChange

      },
      {
        label: { label: 'Phone Number', className: 'font-[500]' },
        id: 'phoneNumber',
        type: 'tel',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "phone_number",
        onChange: handleChange

      },
      {
        label: { label: 'City', className: 'font-[500]' },
        id: 'city',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "city",
        onChange: handleChange

      },
      {
        label: { label: 'Country', className: 'font-[500]' },
        id: 'country',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "country",
        onChange: handleChange

      },
      {
        label: { label: 'Password', className: 'font-worksans font-[500]' },
        id: 'password',
        type: 'password',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "password",
        onChange: handleChange
      },
      {
        label: { label: 'Confirm Password', className: 'font-worksans font-[500]' },
        id: 'cpassword',
        type: 'password',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Confirm Password',
      },
      // Add more form fields as needed
    ],
    radioGroup: {
      className: 'mb-4 mt-4 font-[500]',
      label: 'Are you a tutor or a student?',
      optionsClassName: 'flex items-center space-x-4 justify-evenly',
      options: [
        {
          label: { label: 'Student', className: 'font-normal' },
          id: 'student',
          type: 'radio',
          name: 'account_type',
          value: 'student',
          inputClasses: "mx-0",
          onChange: handleChange,
          defaultChecked: true
        },
        {
          label: { label: 'Tutor', className: 'font-normal' },
          id: 'tutor',
          type: 'radio',
          name: 'account_type',
          value: 'tutor',
          onChange: handleChange
        },
      ],
    },
    formButton: {
      id: 'submit-btn',
      className: ' font-worksans bg-blue-600 text-white px-[24px] py-[8px] rounded-[8px] font-[500]',
      label: 'SIGN UP',
    },
    buttonGroup: {
      className: 'flex-col text-center mt-4',
      separator: {
        className: 'font-roboto text-[24px] text-slate-900 font-bold',
        label: 'OR',
      },
      buttons: [
        {
          id: 'google-btn',
          className: 'font-worksans flex bg-slate-500 justify-center items-center gap-4  mx-auto w-full my-3 px-[24px] py-[8px] border border-white rounded-lg text-white font-[500]',

          label: 'Continue with Google',
          leftIcon: {
            className: "w-[24px] h-[24px]",
            src: "/src/assets/google_logo.svg"
          },
        },
      ],
    },
    redirect: {
      className: 'mt-4 text-center',
      label: {
        className: 'text-gray-200 ',
        label: 'New to TutorPlan?',
      },
      link: {
        to: '/login/sign-up',
        className: 'text-slate-200 underline',
        label: 'Create Account',
      },
    },
  };
  return (
    <main>


      <BaseForm{...SignUpProps} /></main>
  )
}

export default SignUp
