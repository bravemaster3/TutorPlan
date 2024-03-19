import React from 'react'
import { BaseForm } from './Primitives'

const SignUp = () => {
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
    formFields: [
      {
        label: { label: 'First Name', className: 'font-[500]' },
        id: 'firstName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
        placeholder: '',
        name: "first_name"
      },
      {
        label: { label: 'Last Name', className: 'font-[500]' },
        id: 'lastName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "last_name"
      },
      {
        label: { label: 'Email', className: 'font-[500]' },
        id: 'email',
        type: 'email',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Enter your email',
        name: "email"

      },
      {
        label: { label: 'Phone Number', className: 'font-[500]' },
        id: 'phoneNumber',
        type: 'tel',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "phone_number"

      },
      {
        label: { label: 'City', className: 'font-[500]' },
        id: 'city',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "city"

      },
      {
        label: { label: 'Country', className: 'font-[500]' },
        id: 'country',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "country"

      },
      {
        label: { label: 'Password', className: 'font-worksans font-[500]' },
        id: 'password',
        type: 'password',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
        name: "password"
      },
      {
        label: { label: 'Confirm Password', className: 'font-worksans font-[500]' },
        id: 'password',
        type: 'password',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: '',
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
          id: 'user',
          type: 'radio',
          name: 'account_type',
          value: 'student',
          inputClasses: "mx-0",

          defaultChecked: true
        },
        {
          label: { label: 'Tutor', className: 'font-normal' },
          id: 'user',
          type: 'radio',
          name: 'account_type',
          value: 'tutor'
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
    <main><BaseForm{...SignUpProps} /></main>
  )
}

export default SignUp
