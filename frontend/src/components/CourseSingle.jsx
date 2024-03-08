// export default function CourseSingle() {
//   return (
//     <div className="course-single">
//       <button className="course-button">
//         <div className="title-fee">
//           <h3>Course t Course title Course title</h3>
//           <div className="course-fees">{`$${200}`}</div>
//         </div>
//         <div className="course-body-footer">
//           <div className="description">
//             {" "}
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
//               ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//               tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
//               dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>
//           <div className="course-tutor-and-type">
//             <div className="course-tutor">
//               <div className="profile-photo"></div>
//               <div className="tutor-and-location">
//                 <h6>John Doe</h6>
//                 <p>Nairobi, Kenya</p>
//               </div>
//             </div>
//             <div className="course_type">Online/Remote</div>
//           </div>
//         </div>
//       </button>
//     </div>
//   )
// }

import axios from "axios"
import { useEffect, useState } from "react"
import { API_BASE_URL } from "../apiConfig"

// CourseSingle.jsx

//GOOD ONE
// export default function CourseSingle({ props }) {
//   return (
//     <div className="course-card">
//       <div className="course-content">
//         <div className="course-header">
//           <div className="course-title">Zhumba Dance Class kjcnklqslkq</div>
//           <div className="course-price">$200</div>
//         </div>
//         <div className="course-details">
//           <div className="course-description">
//             Dialog content here. Dialog content here. Dialog content here.
//             Dialog content here. Dialog content here. Dialog content here.
//             Dialog content here. Dialog content here. Dialog content here.
//             Dialog content here. Dialog content here. Dialog content here.
//             Dialog content here. Dialog content here. Dialog content here.
//             Dialog content here. Dialog content here. Dialog content here.
//           </div>
//           <div className="instructor-info">
//             <img
//               className="instructor-photo"
//               src="https://via.placeholder.com/64x64"
//               alt="Instructor"
//             />
//             <div className="instructor-details">
//               <div className="instructor-name">Jane Doe</div>
//               <div className="instructor-location">Nairobi, Kenya</div>
//             </div>
//           </div>
//           <div className="course-type">
//             <div className="online">online</div>
//             <div className="physical">physical</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// END OF GOOD ONE

export default function CourseSingle({
  course,
  setSelectedCourse,
  toggleModal,
}) {
  const [tutor, setTutor] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${API_BASE_URL}/tutors/${course.tutor_id}`
  //       )
  //       setTutor(response.data)
  //     } catch (error) {
  //       console.log("An error occurred", error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  const handleCourseClick = () => {
    // console.log("Button clicked for course:", course)
    setSelectedCourse(course)
    toggleModal()
  }
  return (
    <div className="course-card">
      <div className="course-content">
        <div className="course-header">
          <button onClick={handleCourseClick}>
            <div className="course-title">{course.title}</div>
            <div className="course-price">${course.fee}</div>
          </button>
        </div>

        <div className="course-details">
          <div className="course-description">
            {course.description || "No description available."}
            <p>
              <strong>Course duration: </strong>
              {course.duration} min
            </p>
          </div>
          <div className="instructor-info">
            <img
              className="instructor-photo"
              src="https://via.placeholder.com/64x64"
              alt="Instructor"
            />
            <div className="instructor-details">
              <div className="instructor-name">{`${course.tutor.first_name} ${course.tutor.last_name}`}</div>
              <div className="instructor-location">{`${
                course.tutor.city || "City"
              }, ${course.tutor.country}`}</div>
            </div>
          </div>
          <div className="course-type">
            {course.course_type === "remote" ||
            course.course_type === "online" ||
            course.course_type === "both" ? (
              <div className="online">online</div>
            ) : (
              ""
            )}

            {course.course_type === "physical" ||
            course.course_type === "in-person" ||
            course.course_type === "both" ? (
              <div className="physical">physical</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
