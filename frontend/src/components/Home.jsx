import React from 'react'
import { FeaturedCourses, Features, Footer, Hero } from './HomeSections'



const Home = () => {
  return (
    <>
      <>
        <Hero />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />
        <Features />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />
        <FeaturedCourses />
        <hr className="mx-auto bg-yellow-500 w-1/2 " />



      </>
      <Footer />
    </>
  )
}

export default Home
