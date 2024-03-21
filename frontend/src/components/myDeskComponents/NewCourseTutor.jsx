import CourseAdd from "./CourseAdd"
import { useCourseForm } from "components/utils"

export default function NewCourseTutor({ toggleModal }) {
  const { formData, handleChange, handleCourseTypeChoice, handleAddCourse } =
    useCourseForm(toggleModal)

  return (
    <>
      <CourseAdd
        formData={formData}
        handleChange={handleChange}
        handleCourseTypeChoice={handleCourseTypeChoice}
        handleAddCourse={handleAddCourse}
        formTitle="Add a course!"
        editMode={true}
      />
    </>
  )
}
