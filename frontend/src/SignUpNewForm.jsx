import React from 'react'
import { Link } from "react-router-dom"
import NewForm from './NewForm'
/* , subtitle, inputArr, submitBtn, redirect */
const SignUpNewForm = () => {

  return <div className="generic-form"><NewForm 
     title= {'Sign Up'}
    subtitle= {'You are signing up as User'}
    inputArr= {[
      {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        /* placeholder: "", */
      },
      {
        id: 'lastName',
        label: 'Lasted Name',
        type: 'text',
        name: 'last_name',
        /* placeholder: 'e.g. foo@bar.com', */
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'e.g. foo@bar.com',
      },
      {
        id: 'phoneNumber',
        label: 'Phone Number',
        type: 'tel',
        name: 'phone_number',
        placeholder: "",
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      }
      ,
      {
        id: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        name: 'password',
        placeholder: 'Confirm Password',
      }
    ]}
    radioOptions={[ {label: "Student",
		id:"student",
			type:"radio",
			placeholder:"",
      value:"student",
			name:"User",
      defaultChecked:true
		},
    
    {label: "Tutor",
		id:"tutor",
			type:"radio",
			placeholder:"",
      value:"tutor",
			name:"User"
		}
    ]}
    submitBtn= {'Sign up'}
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
    redirect= {{
      label: 'Already a user?',
      link: {
        label: 'Sign in',
        to: '/sign-in',
      }
    }}  /></div>;
};

export default SignUpNewForm;
