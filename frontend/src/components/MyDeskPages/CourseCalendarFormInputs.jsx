import React from 'react'
import AddCourse from './AltAddCourse'
import CourseCalendar from './CourseCalendar'
import useFormCoursesContext from '../../hooks/useFormCoursesContext'
//import useFormCoursesContext from '../../hooks/useFormCoursesContext'
const CourseCalendarFormInputs = () => {
	const { page} = useFormCoursesContext()


	const display = {
		0: <AddCourse />,
		1:  <CourseCalendar />,
	}
	//console.log(page)
	const content = (
		<div>
			{display[page]}
		</div>
	)
	return (
		content
	)
}

export default CourseCalendarFormInputs
