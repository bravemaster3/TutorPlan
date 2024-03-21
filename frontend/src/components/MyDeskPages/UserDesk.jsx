import React from 'react'
import { useState } from 'react'
import { Modal } from '../Primitives'
import AddCourse from './AddCourse'
import SignUp from '../SignUp'
import SignIn from '../SignIn'


const UserDesk = () => {
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
      <section className='flex '>
        <article className=' flex flex-col justify-center items-center w-[12rem] mx-auto  border bg-slate-800 text-slate-200 border-sky-400'>
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

        </article>
        <button onClick={openModal} className='bg-red-500 text-slate-200 p-2 mx-auto'>open Modal</button>

      </section>
      {/* <Modal isOpen={true}  /> */}
      <Modal isOpen={modalOpen} onClose={closeModal} children={<SignIn />} />

    </div>
  )
}

export default UserDesk
