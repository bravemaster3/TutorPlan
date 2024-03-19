import React from 'react'
import { courseTutorData } from "../../constants";
import { AiOutlineUser } from 'react-icons/ai';

const ViewOtherUsers = () => {

  return (
    <div>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Other User</h2>
      <section className='flex flex-wrap'>
        {courseTutorData.map((course) => (
          <UserCard key={course.tutor.id} tutor={course.tutor} />
        ))}

      </section>



    </div>
  )
}

const UserCard = ({ tutor }) => {
  const { id, first_name, last_name, city, country } = tutor;
  return (
    <article
      key={id}
      className="group  bg-gray-800 dark:text-slate-300 h-30  w-40 shadow-md rounded-2xl flex flex-col items-center justify-between hover:bg-sky-500 hover:cursor-pointer m-auto py-4 px-4 "
    >
      <div className="  font-worksans group-hover:text-slate-200 flex flex-col gap-1 items-center  self-stretch ">
        <AiOutlineUser
          size={32}
          className="w-11 h-11  rounded-full border  border-slate-700 group-hover:border-slate-200 "
        />
        <div className="text-center group-hover:text-slate-100">
          <p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
            {first_name} {last_name}
          </p>
          <p className="font-semibold text-xs">
            {city}, {country}
          </p>
        </div>
      </div>

    </article>
  )
}


export default ViewOtherUsers
