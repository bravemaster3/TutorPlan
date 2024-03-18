// CourseDetailsForm.jsx

import React from "react"
import CourseAdd from "src/components/myDeskComponents/CourseAdd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

const CourseDetailsForm = ({
  formData,
  setFormData,
  handleChange,
  handleCourseTypeChoice,
  handleAddCourse,
  selectedCourse,
  toggleEdit,
  editCourse,
  isCourseTutor,
}) => {
  return (
    <div>
      <CourseAdd
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleCourseTypeChoice={handleCourseTypeChoice}
        handleAddCourse={handleAddCourse}
        formTitle={
          isCourseTutor ? (
            <button onClick={toggleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          ) : (
            ""
          )
        }
        initialValues={selectedCourse}
        editMode={editCourse}
      />
    </div>
  )
}

export default CourseDetailsForm
