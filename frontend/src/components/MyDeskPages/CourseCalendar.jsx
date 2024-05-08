import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { MdOutlineClose } from 'react-icons/md'
import AddCourse from './AltAddCourse'

import useAuth from "../../hooks/useAuth";
import useFormCoursesContext from '../../hooks/useFormCoursesContext'
import { coursesUrlEndpoint, getCourseStudents } from '../../apiConfig'
import useSWR from 'swr'


const CourseCalendar = ({ courseData }) => {
	const { auth, isTutor } = useAuth();

	const {
		selectedCourseId,
		setSelectedCourseId,
		enrolled, setEnrolled } = useFormCoursesContext()

	const localizer = momentLocalizer(moment);

	const renderCalendar = (<div className=" flex flex-col  border border-green-600 mx-auto rounded-lg  gap-2 ">
		{/* {!isTutor && (
				<section
					id="modal-titleblock"
					className="text-center w-full h-1/6"
				>
					<h2 className="font-roboto font-bold text-2xl">{courseData.title}</h2>
					<h3 className="font-roboto font-bold text-lg">
						By {courseData.tutor.first_name} {courseData.tutor.last_name}
					</h3>
				</section>
			)} */}
		<div className=" w-full  gap-4 flex rounded-lg  overflow-auto   ">
			{/* <section
					id="courseDetails-section"
					className="w-1/2 h-full border border-rose-950   "
				>
					<AddCourse courseData={courseData} />
				</section> */}

			<section
				id="calendar-section"
				className=" w-96 h-full border flex flex-col p-4  "
			>
				{!isTutor && (
					<section id="calendar-section-titleblock" className="text-center">
						<h2 className="font-roboto font-bold text-2xl">Calendar</h2>
						<h3 className="font-roboto font-bold text-lg">
							{/* Book An Appointment With {courseData.tutor.first_name}{" "} */}
							Book Appointment
						</h3>
						<h4 className="font-roboto mt-2 text-md">
							Select a slot to book appointment{" "}
						</h4>
					</section>
				)}

				<div id="calendar" className="h-96 p-10  ">
					<Calendar localizer={localizer} />
				</div>
				{/* button grey before change green on change */}
				<button
					id="calendar-save-btn"
					className="bg-emerald-500 text-white px-4 py-2 h-11 min-w-fit mx-auto rounded hover:bg-emerald-600"
				>
					Book
				</button>
			</section>
		</div>
	</div>)

	let content

	if (!auth?.userData) {
		content = (<p>Log in to view calendar</p>)

	} else if (enrolled) {
		content = renderCalendar

	} else if (selectedCourseId && !enrolled) {
		if (isTutor) {
			content = (<p>Switch to your student account to view calendar</p>)
			
		} else {
			console.log(isTutor)
			console.log("In connditional hook")
			const cacheKey = coursesUrlEndpoint + '/' + selectedCourseId + '/students'
			const { isLoading,
				error,
				data: isEnrolled,
				mutate, } = useSWR(cacheKey, () => getCourseStudents(selectedCourseId, auth?.userData?.id))
			console.log("is loading?", isLoading)
			console.log("Completed fetch", isEnrolled)

			if (isLoading) {

				console.log("Fetching students")
				content = (<p>Loading...</p>)
			}
			else if (error) {
				console.log(error)
				//content = <p>Students could not be loaded</p>
			}
			else {
				content = isEnrolled ? renderCalendar :
					(<button className='bg-emerald-400 p-4 font-bold '>
						Enroll to view Calendar
					</button>)
			}
		  }
			
		

	}

	else if (!selectedCourseId && isTutor) {
	content = (<p>You need to add course to view calendar</p>)
}



/* const isTutor = isTutor; */
return (
	content
);
};




export default CourseCalendar
