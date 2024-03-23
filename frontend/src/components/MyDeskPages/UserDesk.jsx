import React from 'react'
import { useState } from 'react'
import { InputField2, Modal } from '../Primitives'
import AddCourse from './AddCourse'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import { AiOutlineEye } from 'react-icons/ai'
import { RiSearchLine } from 'react-icons/ri'
import Register from '../Register'
import Login from '../Login'


const UserDesk = () => {
  const inputFieldData =
  {
    label: { label: 'Password', className: 'font-worksans font-[500] ' },
    id: 'password',
    type: 'email',
    inputClasses: 'text-yellow-600 ',
    placeholder: 'Enter your password here',
    containerClasses: " w-1/2 mx-auto  ",
    disabled: false
  }
  /* {
    label: { label: 'Password', className: 'font-worksans font-[500]' },
    id: 'password',
      type: 'password',
        inputClasses: 'text-yellow-600 ',
          placeholder: '',
      } */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log("opening modal")
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'> Welcome User</h2>
      <section className='flex flex-col h-full '>
        <Login />
        {/*  <Register /> */}
        {/* <article className=' flex flex-col justify-center items-center w-[12rem] mx-auto  border bg-slate-800 text-slate-200 border-sky-400'>
          <h2 className='text-center bg-blue-800'>
            Today's Appointments yasyausya
          </h2>
          <p>Appointment 1</p>
          <p>Appointment 2</p>
          <p>Appointment 3</p>
          <p>Appointment 4</p>

        </article>

        <article className=' flex flex-col justify-center items-center w-[12rem] mx-auto  border bg-slate-800 text-slate-200 border-sky-400'>
          <h2 className='text-center bg-blue-800 w-full'>
            New Students visible to Tutors only
          </h2>
          <p>Student 1</p>
          <p>Student 2</p>
          <p>Student 3</p>
          <p>Student 4</p>

        </article>
        <article className=' flex flex-col justify-center items-center w-[12rem] mx-auto  border bg-slate-800 text-slate-200 border-sky-400'>
          <h2 className='text-center bg-blue-800 w-full'>
            Your Courses
          </h2>
          <p>Courses 1</p>
          <p>Courses 2</p>
          <p>Courses 3</p>
          <p>Courses 4</p>

        </article> */}
        {/*         <button onClick={openModal} className='bg-red-500 text-slate-200 p-2 mx-auto'>open Modal</button>
 */}        {/* <form className='mx-auto w-3/4' >
          <label className=" relative block">
            <span className="block text-sm font-medium text-slate-700">Username</span>

            <input type="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />

            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineEye size={16} className="text-gray-500 ml-2" />
            </span>

          </label>
          <label htmlFor="email" className='flex mx-auto'>
            <span className='text-nowrap'>THIS IS THE EMAIL THING</span>
            <label className=" relative block w-60  " onSubmit={(e) => e.preventDefault()}>
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <RiSearchLine size={16} className="text-gray-500 mr-2" />
              </span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <RiSearchLine size={16} className="text-gray-500 ml-2" />
              </span>

              <input id="email" name="email" type="email" required className="mt-1 block w-full pr-9 pl-9 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  placeholder:italic
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " placeholder="Let's go fishing..."


              />
            </label >
          </label>

          <InputField2 {...inputFieldData} />

        </form>
 */}
      </section>

      {/* <Modal isOpen={modalOpen} onClose={closeModal} children={<SignIn />} /> */}

    </div>
  )
}

export default UserDesk
