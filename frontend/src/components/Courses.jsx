import React, { useEffect, useState } from 'react'
import { buttonData, courseData, inputFieldData, sampleFormData } from '../constants'
import { InputField, Button, GenerateComponents, BaseForm, CourseCard, SearchItem, InputField2 } from './Primitives'
import { RiSearchLine } from 'react-icons/ri'
import CourseCard2 from './Primitives/CourseCard2'
import axios from '../apiConfig'



const Courses = () => {



  const [courseData, setCourseData] = useState([])
  const [filteredCourses, setFilteredCourses] = useState(courseData)
 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const COURSES_URL = `/courses`

        const response = await axios.get(COURSES_URL);
        // console.log(JSON.stringify(response.data))


        // setcoursesData(Object.values(response.data));
        // setcoursesData(Object.values(response.data));

        const tutorPromises = response.data.map(async (course) => {
          const TUTOR_URL = `/tutors/${course.tutor_id}`;
          const tutorResponse = await axios.get(TUTOR_URL);
          // console.log(tutorResponse.data)
          return { ...course, tutor: tutorResponse.data };
        });

        const coursesWithTutors = await Promise.all(tutorPromises);
        // console.log(coursesWithTutors);
        setCourseData(coursesWithTutors);
        setFilteredCourses(coursesWithTutors)


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


  }, [])

  const [search, setSearch] = useState('')
/*   const deepSearch = (obj, searchTerm) => {
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
  }; */




  const deepSearch = (obj, searchTerm) => {
    const fieldsToSearch = ['title', 'tutor.first_name', 'tutor.last_name', 'tutor.city', 'tutor.country', 'course_type', 'duration', 'fee', 'category', 'description'];

    return fieldsToSearch.some(field => {
      const nestedKeys = field.split('.');
      const value = nestedKeys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ''), obj);

      /* if (field === 'course_type') {
        pySearchTerm = { searchTerm.includes('in person') || searchTerm.includes('physical') ? 'physical' : '' }
        onSearchTerm = { searchTerm.includes('online') || searchTerm.includes('remote') ? 'online' : '' } */
      /* if (field === 'course_type') {
        const courseOptions = ['physical', 'online', 'in person']; // Define different course options

        const isMatch = value.toLowerCase().includes(searchTerm) || courseOptions.some(option =>
          value.toLowerCase().includes(option) && option.toLowerCase().includes(searchTerm)
        );

        if (value.toLowerCase().includes('both') && isMatch) {
          console.log("matching both");
          return true;
        } else if (isMatch) {
          console.log("matching online/physical");
          return true;
        }
      } */
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

      /* console.log("here>>>", String(value).toLowerCase().includes(searchTerm))

      return String(value).toLowerCase().includes(searchTerm); */
    });
  };
  /* const filteredCourses = courseData.filter(item => deepSearch(item, search.toLowerCase())); */

  useEffect(() => {
  // console.log("Found via deep >>> ", courseData.filter(item => deepSearch(item, search.toLowerCase())));
    setFilteredCourses  (courseData.filter(item => deepSearch(item, search.toLowerCase())))

  }, [search])
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
          // label={{ label: "Search", className: " font-sky-500" }}
          // value={search}
          placeholder="Let's go fishing..."
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<RiSearchLine className='text-slate-700' />}
        />
      </section>

      <section className='flex flex-wrap w-full gap-7 my-4  py-1'>
        <GenerateComponents componentType={CourseCard2} data={filteredCourses} />
      </section>

    </main>
  )
}

export default Courses
