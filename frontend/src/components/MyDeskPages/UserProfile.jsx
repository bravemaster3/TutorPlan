import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const UserProfile = () => {
  return (
    <div>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Profile</h2>
      <AiOutlineUser
        size={32}
        className="w-11 h-11  rounded-full border  border-slate-700 group-hover:border-slate-200 "
      />
      <p>first_name</p>




    </div>
  )
}

export default UserProfile
