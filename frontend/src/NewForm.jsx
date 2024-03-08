import React from 'react'
import { Link } from "react-router-dom"
import FetchItems from "./components/FetchItems"
/* , subtitle, inputArr, submitBtn, redirect */
const NewForm = ({ title, subtitle, inputArr, radioGroup, buttonGroup, redirect }) => {
  const hasRedirect = !!redirect;
  const hasSubtitle = !!subtitle
  return (
    <>
      <form className="login-form">
        <h2 className="title">{title}</h2>
        {hasSubtitle && <h4>{subtitle}</h4>}
        <FetchItems items={inputArr} />


        <div className='form-group'>
          <label>{radioGroup.label}</label>
          <br />
          <div className="radio-group"><FetchItems items={radioGroup.options} /></div>
        </div>


/** */
        {/* {inputArr.map(({id, label, type, name, placeholder}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input 
          type={type}
          name={name}
          placeholder={placeholder}
           />
        </div>
        ))} */}
        <button type="submit" className="primary-btn sign-in" >
            SUBMIT
          </button>
        <div className="button-group">
          
          {buttonGroup &&( <><div className="separator">OR</div>
          
          <div><FetchItems items={buttonGroup} isFormInput={false} /></div></>)}

        </div>


        {hasRedirect && <div className='sign-up'>
          <span>{redirect.label}</span>&nbsp;
          <Link to={redirect.link.to}>{redirect.link.label}</Link>


        </div>}
      </form>
    </>
  )
}

NewForm.defaultProps = {
  title: "Default Title",
  subtitle: "Default Subtitle",
  inputArr: [
    {
      label: "Email",
      id: "email",
      type: "email",
      name: "email",
      placeholder: "e.g. foo@bar.com"
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password"
    }
  ],
  radioGroup: {
    label: " Are you a tutor or a student?",
    options: [{
      label: "Student",
      id: "student",
      defaultChecked: true,
      type: "radio",
      placeholder: "",
      value: "student",
      name: "User"
    },

    {
      label: "Tutor",
      id: "tutor",
      type: "radio",

      value: "tutor",
      name: "User",

    }
    ]
  },

  submitBtn: "Submit",
  redirect: {
    label: "New to tutorplan?",
    link: {
      label: "Create account",
      to: "/login/sign-up"
    }
  },
 

}
export default NewForm



/* radioOptions: [{
    label: "Student",
    id: "student",
    defaultChecked: true,
    type: "radio",
    placeholder: "",
    value: "student",
    name: "User"
  },

  {
    label: "Tutor",
    id: "tutor",
    type: "radio",

    value: "tutor",
    name: "User",

  }
  ], */


 /*  <button type="button" className="sign-in-g">
            Continue with{" "}
            <img className="google" src="/src/assets/images/google.png"></img>
          </button> */
