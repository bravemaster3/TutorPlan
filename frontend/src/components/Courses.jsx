import React, { useEffect, useState } from 'react'
import { buttonData, courseData, inputFieldData, sampleFormData } from '../constants'
import { InputField, Button, GenerateComponents, BaseForm, CourseCard, SearchItem, InputField2 } from './Primitives'
import { RiSearchLine } from 'react-icons/ri'
import CourseCard2 from './Primitives/CourseCard2'
import axios from '../apiConfig'


const Courses = () => {



  const [courseData, setCourseData] = useState([])
 /*  const [filteredCourses, setFilteredCourses] = useState([]) */
 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const COURSES_URL = `/courses`

        const response = await axios.get(COURSES_URL);
        console.log(JSON.stringify(response.data))


        // setcoursesData(Object.values(response.data));
        // setcoursesData(Object.values(response.data));

        const tutorPromises = response.data.map(async (course) => {
          const TUTOR_URL = `/tutors/${course.tutor_id}`;
          const tutorResponse = await axios.get(TUTOR_URL);
          console.log(tutorResponse.data)
          return { ...course, tutor: tutorResponse.data };
        });

        const coursesWithTutors = await Promise.all(tutorPromises);
        console.log(coursesWithTutors);
        setCourseData(coursesWithTutors);


        /* const coursesWithTutor = await Promise.all(
          response.data.map(async (course) => {
            const tutorResponse = await axios.get(
              `/tutors/${course.tutor_id}`
            );
            console.log(tutorResponse.data)
            return { ...course, tutor: tutorResponse.data };
          })
        );
        console.log(coursesWithTutor); */



      } catch (error) {
        console.log(error)

      }
    }
    fetchCourses();
    // setFilteredCourses(courseData)

  }, [])

  const [search, setSearch] = useState('')
  const deepSearch = (obj, searchTerm) => {
    // Recursive function to search through all properties
    const searchInObject = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          // If the property is an object, recursively search in it
          if (searchInObject(obj[key])) {
            return true; // If found, return true
          }
        } else if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
          // If the property is a string or number, check if it contains the search term
          if (String(obj[key]).toLowerCase().includes(searchTerm)) {
            return true; // If found, return true
          }
        }
      }
      return false; // If not found in any property, return false
    };

    // Call the recursive search function
    return searchInObject(obj);
  };



  /* useEffect(() => {
    console.log(search)
    console.log("Found >>> ", courseData.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
    console.log("Found via deep >>> ", courseData.filter(item => deepSearch(item, search.toLowerCase())));
    setFilteredCourses  (courseData.filter(item => deepSearch(item, search.toLowerCase())))

  }, [search]) */
  const filteredCourses = courseData.filter(item => deepSearch(item, search.toLowerCase()));
  /*   const deepSearch = (obj, searchTerm) => {
      // Flatten nested objects and convert values to lowercase strings
      const values = Object.values(obj)
        .flatMap(value => {
          if (typeof value === 'object' && value !== null) {
            return deepSearch(value, searchTerm); // Recursively flatten nested objects
          }
          return String(value).toLowerCase(); // Convert non-object values to lowercase strings
        });
  
      // Check if any of the values contain the search term
      return values.some(value => value.includes(searchTerm.toLowerCase()));
    }; */

  /*  const deepSearch = (obj, searchTerm) => {
     const fieldsToSearch = ['title', 'tutor.first_name', 'tutor.last_name', 'tutor.city', 'tutor.country', 'course_type', 'duration', 'fee', 'category', 'description'];
 
     return fieldsToSearch.some(field => {
       const nestedKeys = field.split('.');
       const value = nestedKeys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ''), obj);
       return String(value).toLowerCase().includes(searchTerm);
     });
   }; */
 
  // const filteredCourses = courseData;

  console.log('filteredCourses:', filteredCourses);

  return (
    <main className='   mx-auto max-w-4xl dark:text-slate-300 '>
      <section className='w-full min-h-6'>
        <h1 className="flex text-[56px]  font-roboto font-extralight place-content-center leading-none mt-5">Course Catalog</h1>
        <h2 className="text-[32px] text-center font-roboto font-light py-[-2px]">Dive into our sea of courses</h2>
        <h2 className="text-[24px] text-center font-roboto font-light mb-4">{filteredCourses.length} Available</h2>

        {/* <SearchItem search={search}
          setSearch={setSearch} /> */}

        <InputField2
          type={"text"}
          id={"search"}
          role='searchbox'
          label={{ label: "Search", className: " font-sky-500" }}
          // value={search}
          placeholder="Let's go fishing..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className='flex flex-wrap w-full gap-7 my-4  py-1'>
        <GenerateComponents componentType={CourseCard2} data={filteredCourses} />
      </section>

    </main>
  )
}

export default Courses
