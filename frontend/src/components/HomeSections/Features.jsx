import React from 'react'
import { features } from '../../constants'
import { layout } from '../../style'
layout
const Features = () => {
  return (
    <section className={`p-6 my-12 bg-blue-300scroll-mt-20 ${layout.sectionHeight}`}>
      <h2 className='font-poppins text-4xl font-bold text-center sm:text-5xl  mb-6 dark:text-slate-100 text-slate-900 '>Features</h2>
      <ul className='list-none mx-auto my-12 flex flex-col items-center gap-8 [&>*:nth-child(even)]:flex-row-reverse'> {/* sm:flex-row  */}
        {features.map((feature) => (
          <li key={feature.id} className='group flex justify-start items-center rounded-lg p-6  ring-1 ring-slate-900/5  space-y-3 w-full gap-2 '>  {/* w-2/3 h-[42dvh] dark:bg-zinc-700 bg-white */}
            <section className='flex flex-col justify-start items-center p-6  ring-1 ring-slate-900/5  space-y-3 w-full '> {/* dark:bg-zinc-800 bg-white */}
              {React.createElement(feature.icon, { className: "w-7 h-7 text-sky-500 " })}

              <h3 className=" font-poppins text-[20px] text-center mt-2 dark:text-slate-200 text-slate-900 ">
                {feature.title}
              </h3>
              <p className=" font-poppins text-[16px] text-center dark:text-slate-200 text-slate-900 hidden sm:block group-hover:text-slate-200">
                {feature.content}
              </p>
            </section>
            <img src={feature.source} className=' w-[480px] hidden md:block' alt="" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
