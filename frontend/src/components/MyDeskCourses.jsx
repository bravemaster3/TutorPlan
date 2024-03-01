import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import md5 from "md5"
import * as Icons from "react-icons/fa"

export default function MyDeskCourses() {
  const courses = [
    {
      id: 1,
      title: "Piano lessons",
      duration: 120,
      description:
        "In this lesson, you will learn to be a professional concert player in 2 years, thanks to my new method...",
    },
    {
      id: 2,
      title: "Fun Math",
      duration: 90,
      description:
        "You didn't understand your math class? No worries. I will help you understand better than your peers...",
    },
    {
      id: 3,
      title: "Art History",
      duration: 60,
      description:
        "Explore the history of art from the ancient times to the modern era...",
    },
    {
      id: 4,
      title: "Basic Cooking",
      duration: 45,
      description:
        "Learn how to cook simple and delicious meals for you and your family...",
    },
    {
      id: 5,
      title: "Advanced Physics",
      duration: 180,
      description:
        "Dive into the fascinating world of quantum mechanics and relativity...",
    },
    {
      id: 6,
      title: "Yoga for Beginners",
      duration: 30,
      description:
        "Start your journey towards mindfulness and better health with yoga...",
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
      <h3>You are taking {numberCourses} courses</h3>
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-div" key={course.id}>
            <div className="course-icon">
              <CourseIcon title={course.title} />
            </div>
            <h5>{course.title}</h5>
          </div>
        ))}
        <div className="course-div">
          <div className="course-icon add">
            <Icons.FaPlus />
          </div>
          <h5>Add course</h5>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

function CourseIcon({ title }) {
  // Generate a hash from the title
  const hash = md5(title)

  // Convert the hash into a number
  const num = parseInt(hash, 16)

  // Get all available icons
  const iconNames = Object.keys(Icons)

  // Use the number to select an icon
  const IconComponent = Icons[iconNames[num % iconNames.length]]

  // Render the selected icon
  return <IconComponent />
}
