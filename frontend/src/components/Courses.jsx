import React, { useState } from 'react'
import { buttonData, courseData, inputFieldData, sampleFormData } from '../constants'
import { InputField, Button, GenerateComponents, BaseForm, CourseCard, SearchItem } from './Primitives'
import { RiSearchLine } from 'react-icons/ri'
import CourseCard2 from './Primitives/CourseCard2'
CourseCard2
const Courses = () => {
  const [search, setSearch] = useState('')
  const deepSearch = (obj, searchTerm) => {
    if (typeof obj === 'string' || typeof obj === 'number') {
      return String(obj).toLowerCase().includes(searchTerm);
    } else if (typeof obj === 'object') {
      return Object.entries(obj).some(([key, value]) => key !== 'id' && deepSearch(value, searchTerm));
    } else {
      return false;
    }
  };
  const filteredCourses = courseData.filter(item => deepSearch(item, search.toLowerCase()));

  console.log('filteredCourses:', filteredCourses);

  return (
    <main className='   mx-auto max-w-4xl dark:text-slate-300 '>
      <section className='w-full min-h-6'>
        <h1 className="flex text-[56px]  font-roboto font-extralight place-content-center leading-none mt-5">Course Catalog</h1>
        <h2 className="text-[32px] text-center font-roboto font-light py-[-2px]">Dive into our sea of courses</h2>
        <h2 className="text-[24px] text-center font-roboto font-light mb-4">{filteredCourses.length} Available</h2>

        <SearchItem search={search}
          setSearch={setSearch} />
      </section>

      <section className='flex flex-wrap w-full gap-7 my-4  py-1'>
        <GenerateComponents componentType={CourseCard2} data={filteredCourses} />
      </section>

    </main>
  )
}

export default Courses
