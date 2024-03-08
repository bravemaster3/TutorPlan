import React from 'react'
import { Link } from "react-router-dom"
import NewForm from './NewForm'
/* , subtitle, inputArr, submitBtn, redirect */
const SignInNewForm = () => {

  return <div className="generic-form"><NewForm 
     title= {'Sign In'}
    subtitle= {'You are signing in as a User'}
    inputArr= {[
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'e.g. foo@bar.com',
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password'
      }
      
    ]}
    submitBtn= {'Sign in'}
    redirect= {{
      label: 'Already a user?',
      link: {
        label: 'Sign up',
        to: '/sign-up',
      }
    }} 
     buttonGroup=
    {[
      {
        id: "sth",
        label: "Continue with Google",
        className: "sign-in-g"
      }
      /*  type: "button",
       
       className: "sign-in"
     }, */
    ]}
    /></div>;
};

export default SignInNewForm;
