import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CourseIcon from "./CourseIcon"
import * as Icons from "react-icons/fa"
import { useCourseDetails, useCourseForm, useFetchCourses } from "./utils"
import CourseDetails from "./CourseDetails"
import { useNavigate } from "react-router-dom"

export default function MyDeskCourses() {
  const navigateTo = useNavigate()
  const [isModalAddOpen, setIsModalAddOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  const toggleModalAdd = () => {
    setIsModalAddOpen(!isModalAddOpen)
  }

  const { isLoading, courses, error } = useFetchCourses(
    localStorage.getItem("userId"),
    null
  )

  const {
    selectedCourse,
    setSelectedCourse,
    toggleModal,
    toggleEdit,
    editCourse,
    isModalOpen,
  } = useCourseDetails()

  const {
    formData,
    setFormData,
    handleChange,
    handleCourseTypeChoice,
    handleAddCourse,
    handleEditCourse,
  } = useCourseForm(toggleModal)

  const handleCourseClick = (course) => {
    return () => {
      setSelectedCourse(course)
      toggleModal()
    }
  }

  // const courses = [
  //   {
  //     id: 1,
  //     title: "Piano lessons",
  //     duration: 120,
  //     description:
  //       "In this lesson, you will learn to be a professional concert player in 2 years, thanks to my new method...",
  //   },
  //   {
  //     id: 2,
  //     title: "Fun Math",
  //     duration: 90,
  //     description:
  //       "You didn't understand your math class? No worries. I will help you understand better than your peers...",
  //   },
  //   {
  //     id: 3,
  //     title: "Art History",
  //     duration: 60,
  //     description:
  //       "Explore the history of art from the ancient times to the modern era...",
  //   },
  //   {
  //     id: 4,
  //     title: "Basic Cooking",
  //     duration: 45,
  //     description:
  //       "Learn how to cook simple and delicious meals for you and your family...",
  //   },
  //   {
  //     id: 5,
  //     title: "Advanced Physics",
  //     duration: 180,
  //     description:
  //       "Dive into the fascinating world of quantum mechanics and relativity...",
  //   },
  //   {
  //     id: 6,
  //     title: "Yoga for Beginners",
  //     duration: 30,
  //     description:
  //       "Start your journey towards mindfulness and better health with yoga...",
  //   },
  // ]
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
      {isLoading ? (
        <Spinner text={"Loading your courses"} />
      ) : (
        <>
          {/* <div className="mydesk-content"> */}
          <h2>You are taking {numberCourses} courses</h2>
          <div className="course-list">
            {courses.map((course) => (
              <button
                className="course-btn"
                key={course.id}
                onClick={handleCourseClick(course)}
              >
                <div className="course-icon">
                  <CourseIcon title={course.title} />
                </div>
                <h5>{course.title}</h5>
              </button>
            ))}
            <button
              className="course-btn"
              onClick={() => navigateTo("/courses")}
            >
              <div className="course-icon add">
                <Icons.FaPlus />
              </div>
              <h5>Add course</h5>
            </button>
          </div>

          {isModalAddOpen && (
            <div className="modal-bg">
              <div className="generic-form modal show">
                <CloseIconSimple handleClose={toggleModalAdd} />
                <NewCourseTutor toggleModal={toggleModalAdd} />
                {/* <button onClick={toggleModal}>Close</button> */}
              </div>
            </div>
          )}

          {isModalOpen && (
            <CourseDetails
              selectedCourse={selectedCourse}
              toggleModal={toggleModal}
              toggleEdit={toggleEdit}
              editCourse={editCourse}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleCourseTypeChoice={handleCourseTypeChoice}
              handleAddCourse={(e) => handleEditCourse(e, selectedCourse.id)}
            />
          )}
          {/* </div> */}
        </>
      )}
    </>
  )
}
