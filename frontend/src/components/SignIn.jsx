import React from 'react'
import { BaseForm } from './Primitives'

const SignIn = () => {
  const SignInProps = {
    formClasses: 'flex baseform font-worksans flex-col w-[350px] mx-auto justify-center   p-8 rounded-md gap-2',
    title: {
      className: 'text-[40px] font-roboto font-bold',
      label: 'Welcome Back!',
    },
    subtitle: {
      className: ' text-center mb-4 font-[500]',
      label: 'You are signing in as a',
    },
    formFields: [
      {
        label: { label: 'Email', className: 'font-[500]' },
        id: 'email',
        type: 'email',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        placeholder: 'Email',
      },
      {
        label: { label: 'Password', className: 'font-worksans font-[500]' },
        id: 'password',
        type: 'password',
        inputClasses: 'px-4 rounded-[8px] py-[4px]  ',
        placeholder: '',
      },
      // Add more form fields as needed
    ],
    radioGroup: {
      className: 'font-[500]',
      label: 'Are you a tutor or a student?',
      optionsClassName: 'flex items-center justify-center gap-14 px-14',
      options: [
        {
          label: { label: 'Student', className: 'font-normal' },
          id: 'user',
          type: 'radio',
          name: 'account_type',
          value: 'student',
          inputClasses: "ml-3 mr-6 h-4 w-4",
          defaultChecked: true
        },
        {
          label: { label: 'Tutor', className: 'font-normal' },
          id: 'user',
          type: 'radio',
          name: 'account_type',
          value: 'tutor',
          inputClasses: "ml-3 h-4 w-4"
        },
      ],
    },
    formButton: {
      id: 'submit-btn',
      className: ' font-worksans bg-blue-600 text-white px-[24px] py-[8px] rounded-[8px] font-[500]',
      label: 'SIGN IN',
    },
    buttonGroup: {
      className: 'flex-col text-center mt-0',
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
      className: ' text-center',
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
    <main><BaseForm{...SignInProps} /></main>
  )
}

export default SignIn
