import React from "react";
import { Button, InputField, GenerateComponents } from "./";
import { sampleFormData } from "../../constants";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom"

const BaseForm = (
  { formClasses,
    title,
    subtitle,
    formFields,
    radioGroup,
    formButton,
    buttonGroup,
    handleFormSubmit,
    redirect }
) => {
  return (
    <form className={formClasses} onSubmit={handleFormSubmit}>
      <section>
        <h2 className={title.className}>{title.label}</h2>
        {subtitle && <h4 className={subtitle.className}>{subtitle.label}</h4>}
      </section>
      <GenerateComponents componentType={InputField} data={formFields} />
      {radioGroup && (
        <div className={radioGroup.className}>
          <label>{radioGroup.label}</label>
          <br />
          <div className={radioGroup.optionsClassName}>
            <GenerateComponents componentType={InputField} data={radioGroup.options} />
          </div>
        </div>
      )}
      <Button {...formButton} />
      {buttonGroup && (
        <div className={buttonGroup.className}>
          <div className={buttonGroup.separator.className}>
            {buttonGroup.separator.label}
          </div>
          <>
            <GenerateComponents componentType={Button} data={buttonGroup.buttons} />
          </>
        </div>
      )}
      {redirect && (
        <div className={redirect.className}>
          <span className={redirect.label.className}>
            {redirect.label.label}
          </span>
          &nbsp;
          {/* <p className="underline">{redirect.link.label}</p> */}
          <Link to={redirect.link.to} className={redirect.link.className}>
            {redirect.link.label}
          </Link>
        </div>
      )}
    </form>
  );
};
/* BaseForm.defaultProps = {
  formClasses: 'flex flex-col w-sm justify-center align-center bg-gray-400 p-8 rounded-md',
  title: {
    className: 'text-2xl font-bold mb-4',
    label: 'Sign Up Form',
  },
  subtitle: {
    className: 'text-sm mb-4',
    label: 'Please fill in the required information.',
  },
  formFields: [
    {
      label: { label: 'Username', className: '' },
      id: 'username',
      type: 'text',
      inputClasses: 'text-sm font-bold mb-6 ',
      placeholder: 'Enter your username',
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    // Add more form fields as needed
  ],
  radioGroup: {
    className: 'mb-4',
    label: 'Select your gender',
    optionsClassName: 'flex items-center space-x-4',
    options: [
      {
        label: 'Male',
        id: 'gender-male',
        type: 'radio',
        name: 'gender',
      },
      {
        label: 'Female',
        id: 'gender-female',
        type: 'radio',
        name: 'gender',
      },
    ],
  },
  formButton: {
    id: 'submit-btn',
    className: 'bg-blue-500 text-white px-4 py-2 rounded-md',
    label: 'Default Form Submit',
  },
  buttonGroup: {
    className: 'flex-col mt-4',
    separator: {
      className: 'text-gray-500',
      label: 'or',
    },
    buttons: [
      {
        id: 'google-btn',
        className: 'flex justify-between items-center gap-4  m-3 p-4 border border-white rounded-sm text-white',

        label: 'Sign Up with Google',
      },
      {
        id: 'facebook-btn',
        className: "flex justify-between items-center gap-4  m-3 p-4 border border-white rounded-sm text-white",

        label: 'Sign Up with Facebook',
      },
    ],
  },
  redirect: {
    className: 'mt-4 text-center',
    label: {
      className: 'text-gray-500',
      label: 'Already have an account?',
    },
    link: {
      to: '/login',
      className: 'text-blue-500',
      label: 'Login here',
    },
  },
};
 */
export default BaseForm;
