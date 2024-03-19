import React from 'react'
import styles, { layout } from '../../style'
import { Button, GenerateComponents } from '../Primitives'
import { heroButtons, heroContent } from '../../constants'
import { frustratedwoman } from '../../assets'
heroContent

const Hero = () => {
  return (
    <section id='hero' className={`flex sm:flex-row flex-col justify-between items-center  gap-8 scroll-mt-20 ${layout.sectionHeight}`} >

      <article className=''>
        <p className=' max-w-md text-xl mb-2 text-center sm:text-left dark:text-slate-200 text-slate-900 '>{heroContent.subtitle}</p>
        <h2 className='font-poppins max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left dark:text-slate-200 text-slate-900 '>{heroContent.title}</h2>
        <p className=' max-w-md text-xl mt-2 mb-2 text-center sm:text-left dark:text-slate-200 text-slate-900 '>{heroContent.description}</p>
        <div className='flex gap-12 my-8 '>
          <GenerateComponents componentType={Button} data={heroButtons} />
        </div>
      </article>
      <img src={frustratedwoman} alt="mad woman" className='h-[300px] w-[300px] hidden sm:block
       ' />
    </section >

  )
}

export default Hero;
