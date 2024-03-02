import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"

export default function MyDeskCoursesTutor() {
  const courses = [
    {
      id: 1,
      title: "Piano lessons",
      duration: 120,
      description:
        "In this lesson, you will learn to be a professional concert player in 2 years, thanks to my new method...",
    },
  ]
  const numberCourses = courses.length

  // const [numberCourses, setNumberCourses] = useState(0)

  // const [courses, setCourses] = useState([]);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get('Your API URL here');
  //     setCourses(response.data);
  //     setCount(response.data.length);
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once on mount

  // useEffect(() => {
  //   setCount(courses.length);
  // }, [courses]); // This effect runs whenever 'courses' state changes

  return (
    <>
      {/* <div className="mydesk-content"> */}
      <h3>You are teaching {numberCourses} courses</h3>
      <div className="course-list">
        {courses.map((course) => (
          <button className="course-btn" key={course.id}>
            <div className="course-icon">
              <CourseIcon title={course.title} />
            </div>
            <h5>{course.title}</h5>
          </button>
        ))}
        <button className="course-btn">
          <div className="course-icon add">
            <Icons.FaPlus />
          </div>
          <h5>Add course</h5>
        </button>
      </div>
      {/* </div> */}
    </>
  )
}
