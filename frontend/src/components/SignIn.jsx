import React from 'react'
import { BaseForm, GenerateComponents, RadioOptions } from './Primitives'
GenerateComponents
const SignIn = () => {
  const radioOptions = [
    {
      id: 'student',
      label: 'Student',
      name: 'account_type'
    },
    {
      id: 'tutor',
      label: 'Tutor',
      name: 'account_type'
    }
  ]
  const SignInProps = {
    formClasses: 'flex font-worksans flex-col border mx-auto justify-center  p-8 rounded-md gap-2',
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
      optionsClassName: 'flex  items-center justify-center gap-14 ',
      options: [
        {
          label: { label: 'Student', className: ' font-normal  ' },
          id: 'student',
          type: 'radio',
          name: 'account_type',
          value: 'student',
          inputClasses: "mr-2 h-4 w-4 ",
          containerClasses: '',

          defaultChecked: true
        },
        {
          label: { label: 'Tutor', className: '  font-normal ' },
          id: 'tutor',
          type: 'radio',
          name: 'account_type',
          value: 'tutor',
          inputClasses: " mr-2 h-4 w-4 ",
          containerClasses: 'flex-row-reverse',
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
    <main><BaseForm{...SignInProps} />

      {/* <fieldset>
        <legend>Published status</legend>

        <input id="draft" className="peer/draft" type="radio" name="status" checked />
        <label for="draft" className="peer-checked/draft:text-sky-500">Draft</label>

        <input id="published" className="peer/status" type="radio" name="status" />
        <label for="published" className="peer-checked/status:text-sky-500 text-yellow-500">Published</label>

        <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
        <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
      </fieldset> */}

    </main>

  )
}

export default SignIn
