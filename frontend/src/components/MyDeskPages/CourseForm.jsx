import React from 'react'
import CourseCalendarFormInputs from "./CourseCalendarFormInputs";
import useFormCoursesContext from '../../hooks/useFormCoursesContext';
import { coursesUrlEndpoint, getCourseStudents } from '../../apiConfig';
import useSWR from 'swr';

const CourseForm = () => {
	const {
		page,
		setPage,
		title,
		disablePrev,
		disableNext,
		prevHide,
		nextHide,
		
	} = useFormCoursesContext()

	const handlePrev = () => setPage(prev => prev - 1)
	const handleNext = () => setPage(prev => prev + 1)
console.log("courses form")
	return (
		<div className=' w-[400px]
		 '>

			<header>

				

				<div className="flex gap-2">

					<button type="button" className={`border disabled:bg-yellow-400 rounded-md  bg-violet-800 border-violet-500 p-1 text-md ${prevHide ? "hidden" : ""}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

					<button type="button" className={`border bg-violet-800 rounded-md  border-violet-500 p-1 text-md ${nextHide ? "hidden" : ''}`} onClick={handleNext} disabled={disableNext}>Next</button>

					{/*  <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button> */}
				</div>
				<h2 className='text-center'>{title[page]}</h2>
			</header>

			<CourseCalendarFormInputs />

		</div>
	)
}

export default CourseForm
