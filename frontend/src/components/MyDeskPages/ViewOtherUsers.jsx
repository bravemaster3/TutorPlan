import React, { useState } from 'react'
import { courseTutorData } from "../../constants";
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ViewOtherUsers = () => {


  const UserCard = ({ tutor }) => {
    const [flip, setFlip] = useState(false);
    const { id, first_name, last_name, email, phone_number, city, country, bio } = tutor;
    return (
      <article
        onClick={() => setFlip(!flip)}
        key={id}
        className={`${flip ? "flip" : ''} group card min-w-72 min-h-64 bg-gray-800 dark:text-slate-300  shadow-md rounded-2xl flex  items-center justify-center hover:bg-sky-500 hover:cursor-pointer m-auto py-4 px-4 `}/*   */
      >

        <section id='user-front' title='click to see details ' className="front  font-worksans w-full h-full group-hover:text-slate-200 flex flex-col gap-4 items-center  justify-center ">
          <article id='user-details' className='flex flex-col items-center  justify-center'>
            <AiOutlineUser
              size={32}
              className="w-11 h-11  rounded-full border  border-slate-700 group-hover:border-slate-200 "
            />
            <div className="text-center ">
              <p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
                {first_name} {last_name}
              </p>
              <p className="font-semibold text-xs">
                {city}, {country}
              </p>
            </div>

          </article>

          {/*  this link should take you to all appointments with your tutor/student */}

          <Link to="/Courses" title={`View Your Appointments with ${first_name} `} className='group/view group-hover:text-slate-200 flex text-sm items-end border px-2 py-1  rounded-3xl hover:bg-slate-100'><span className='group-hover/view:text-sky-700 dark:text-slate-200'>Appointments</span>
            <MdOutlineKeyboardArrowRight className='h-5 w-5 dark:text-slate-200 group-hover/view:translate-x-0.5 group-hover/view:text-sky-600' />
          </Link>
        </section>



        <section id='user-back' className="back w-full font-worksans group-hover:text-slate-200 flex flex-col gap-2 items-center self-stretch px-8 ">
          <h2 className="font-roboto group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium uppercase  text-lg">
            {first_name} {last_name}
          </h2>
          <div className='flex gap-2 '>
            <AiOutlineUser
              size={32}
              className="w-12 h-12  rounded-full border  border-slate-700 group-hover:border-slate-200 "
            />
            <div className="mx-auto group-hover:text-slate-100">

              <p className=" text-xs text-nowrap">
                <span className='font-semibold text-sm'>Email: </span>{email}
              </p>
              <p className=" text-xs text-nowrap">
                <span className='font-semibold text-sm'>Phone Number: </span>
                {phone_number}
              </p>

              <p className="text-xs text-nowrap">
                <span className='font-semibold text-sm'>
                  Location: </span>
                {city}, {country}
              </p>
            </div>

          </div>
          <hr className="mx-auto bg-yellow-500 w-1/2 mt-2" />
          <p className='text-xs line-clamp-6 overflow-hidden text-justify   '>{bio ? bio : "No Bio available"}</p>




        </section>




      </article>
    )
  }

  return (
    <div>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Other User</h2>
      <section className='mx-auto flex flex-wrap p-8'>
        {courseTutorData.map((course) => (
          <UserCard key={course.tutor.id} tutor={course.tutor} />
        ))}

      </section>



    </div>
  )
}



export default ViewOtherUsers
