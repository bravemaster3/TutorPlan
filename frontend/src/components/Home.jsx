import React from 'react'
import { FeaturedCourses, Features, Footer, Hero } from './HomeSections'



const Home = () => {
  return (
    <>
      <main className='mx-auto max-w-4xl '>
        <Hero />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />
        <Features />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />
        <FeaturedCourses />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />



      </main>
      <Footer />
    </>
  )
}

export default Home
