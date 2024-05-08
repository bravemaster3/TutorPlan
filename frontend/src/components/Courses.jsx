import React, { useEffect, useState } from 'react'
import { buttonData, courseData, inputFieldData, sampleFormData } from '../constants'
import { InputField, Button, GenerateComponents, BaseForm, CourseCard, SearchItem, InputField2 } from './Primitives'
import { RiSearchLine } from 'react-icons/ri'
import CourseCard2 from './Primitives/CourseCard2'
import axios, { coursesUrlEndpoint as cacheKey, getCourses } from '../apiConfig'

import useSWR from 'swr'
import SkeletonCourse from './Skeletons/SkeletonCourse'

const Courses = () => {
 
  const [numCourses, setNumCourses] = useState(0)
  const [filteredCourses, setFilteredCourses] = useState([])
  const [search, setSearch] = useState('')

  const { isLoading,
    error,
    data: cachedCourseData,
    mutate, } = useSWR(cacheKey, getCourses)


    useEffect(() => {
  if (cachedCourseData) {
    //console.log("Updating filterer courses in cache")
    setFilteredCourses(cachedCourseData);    
  }
  //console.log("Cached courses>> ",cachedCourseData)
  
}, [cachedCourseData]);
  //console.log("Updated Filtered Courses>>", filteredCourses)

  let content;

  if (isLoading) {
    content = (
      [...Array(10).keys()].map(i => {
        return <SkeletonCourse browser={true} key={i} />
      })
    )
  }
  else if (error) {
    console.log(error)
    content = <p>Courses could not be loaded</p>
  }
  else {
    //console.log("Inside the else Filtered courses defined? ",filteredCourses!==undefined)
    if (filteredCourses){content = <GenerateComponents componentType={CourseCard2} data={filteredCourses} />}
    else{
      content = <p>Filtered Courses</p>
    }
    
  }


 
  useEffect(() => {
    setNumCourses(filteredCourses?.length)
  }, [filteredCourses])
  
  

  const deepSearch = (obj, searchTerm) => {
    const fieldsToSearch = ['title', 'tutor.first_name', 'tutor.last_name', 'tutor.city', 'tutor.country', 'course_type', 'duration', 'fee', 'category', 'description'];

    return fieldsToSearch.some(field => {
      const nestedKeys = field.split('.');
      const value = nestedKeys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ''), obj);

      
      if (field === 'course_type') {
        // console.log("in course type >>", searchTerm)
        const otherPhysical = 'in person'
        const physical = 'physical'
        const online = 'online'
        if (value.toLowerCase().includes('both') && (physical.toLowerCase().includes(searchTerm) || online.toLowerCase().includes(searchTerm) || otherPhysical.toLowerCase().includes(searchTerm))) { console.log("matching both"); return true; }
        else
          if (value.toLowerCase().includes(searchTerm)) {
            // console.log("matching online/physical");
            /* if (value.toLowerCase() === 'both' && (searchTerm.includes('online') || searchTerm.includes('physical'))) { */
            return true; // Match 'both' courses if 'online' or 'physical' is in the search term
          }
          else if (value.toLowerCase().includes('physical') && otherPhysical.toLowerCase().includes(searchTerm)) {
            // console.log("matching in person");
            return true;
          } /* else if ((value.toLowerCase().includes(searchTerm) || otherPhysical.toLowerCase().includes(searchTerm)) && (value.toLowerCase().includes('physical') || value.toLowerCase().includes('both'))) {
          return true; // Regular search for other course types
        } */
      } else {
        return String(value).toLowerCase().includes(searchTerm); // Regular search for other fields
      }
    
    });
  };

  useEffect(() => {
    //console.log("Search changed")
    setFilteredCourses(cachedCourseData?.filter(item => deepSearch(item, search.toLowerCase())))
    //console.log("Filtered courses>>",filteredCourses)
  }, [search])

  return (
    <>
      <section className='w-full min-h-6'>
        <h1 className="flex text-[56px]  font-roboto font-extralight place-content-center leading-none mt-5">Course Catalog</h1>
        <h2 className="text-[32px] text-center font-roboto font-light py-[-2px]">Dive into our sea of courses</h2>
        <h2 className="text-[24px] text-center font-roboto font-light mb-4">{isLoading ? "Loading..." : numCourses + " Available"} </h2>

        {/* <SearchItem search={search}
          setSearch={setSearch} /> */}

        <InputField2
          type={"text"}
          id={"search"}
          role='searchbox'
          // label={{ label: "Search", className: " font-sky-500" }}
          // value={search}
          placeholder="Let's go fishing..."
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<RiSearchLine className='text-slate-700' />}
        />
      </section>

      <section className='flex flex-wrap w-full gap-7 my-4 justify-center py-1'>
        {content}   
      </section>

    </>
  )
}

export default Courses
