import React from 'react'
import { featuredCourses } from '../../constants'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { layout } from '../../style'


const FeaturedCourses = () => {
  return (
    <section className={`p-6 my-12  scroll-mt-20 ${layout.sectionHeight}`}>
      <h2 className='font-poppins text-4xl font-bold text-center sm:text-5xl  mb-6 text-slate-900 '>Featured Courses</h2>
      <ul className='list-none mx-auto my-12 flex flex-col flex-wrap justify-center sm:flex-row items-center gap-8'>
        {featuredCourses.map((feature) => (
          <li key={feature.id} className='group hover:bg-sky-500 flex flex-col w-2/5 h-[45dvh] md:h-[40dvh]  justify-start items-center rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3  '>

            {React.createElement(feature.icon, { className: "w-6 h-6 text-sky-500 group-hover:text-slate-200" })}

            <h3 className=" font-poppins text-[20px] text-center mt-2 text-slate-900 group-hover:text-slate-200 ">
              {feature.title}
            </h3>
            <p className=" font-poppins text-[16px] text-center text-slate-900 hidden sm:block group-hover:text-slate-200">
              {feature.content}
            </p>
            <Link to="/Courses" className='group/view group-hover:text-slate-200 flex items-end border px-2 py-1  rounded-3xl hover:bg-slate-100'><span className='group-hover/view:text-sky-700'>View</span>
              <MdOutlineKeyboardArrowRight className='h-6 w-6  group-hover/view:translate-x-0.5 group-hover/view:text-sky-500' />
            </Link>
          </li>
        ))}


      </ul>
    </section>
  )
}

export default FeaturedCourses
