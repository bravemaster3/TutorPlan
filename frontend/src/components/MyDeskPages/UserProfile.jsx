import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GenerateComponents, InputField } from '../Primitives'



const UserProfile = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inputFieldData =
  {
    id: 'email',
    type: 'text',
    placeholder: 'Enter email',
    value: email,
    onChange: (e) => setEmail(e.target.value),
    name: 'email',
    defaultChecked: false,
  }/* ,
    {
      label: 'New Username',
      id: 'username2',
      type: 'text',
      placeholder: 'Enter your username',

      name: 'username',
      defaultChecked: false,
    },
    // Add more input field data as needed
  ]; */

  return (
    <div className='mx-auto w-1/2'>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Profile</h2>
      <AiOutlineUser
        size={32}
        className="w-11 h-11  rounded-full border  border-slate-700 group-hover:border-slate-200 "
      />
      <p>first_name</p>

      {/*  <GenerateComponents componentType={InputField} data={inputFieldData} /> */}
      <label className=" relative block w-1/2 m-auto" onSubmit={(e) => e.preventDefault()}>
        <span className="sr-only">Search</span>

        <InputField {...inputFieldData} />
      </label >






    </div>
  )
}

export default UserProfile
