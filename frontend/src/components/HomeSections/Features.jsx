import React from 'react'
import { features } from '../../constants'
import { layout } from '../../style'
layout
const Features = () => {
  return (
    <section className={`p-6 my-12 bg-blue-300scroll-mt-20 ${layout.sectionHeight}`}>
      <h2 className='font-poppins text-4xl font-bold text-center sm:text-5xl  mb-6 text-slate-900 '>Features</h2>
      <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8 '>
        {features.map((feature) => (
          <li key={feature.id} className='group hover:bg-sky-500 flex flex-col w-2/3 h-[42dvh]  justify-start items-center rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 '>

            {React.createElement(feature.icon, { className: "w-7 h-7 text-sky-500 group-hover:text-slate-200" })}

            <h3 className=" font-poppins text-[20px] text-center mt-2 text-slate-900 group-hover:text-slate-200">
              {feature.title}
            </h3>
            <p className=" font-poppins text-[16px] text-center text-slate-900 hidden sm:block group-hover:text-slate-200">
              {feature.content}
            </p>
          </li>
        ))}


      </ul>
    </section>
  )
}

export default Features
