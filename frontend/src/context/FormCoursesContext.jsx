import { createContext, useEffect, useState } from "react";
import useFormContext from "../hooks/useFormContext";
import useAuth from "../hooks/useAuth";


const FormCoursesContext = createContext({})

export const FormCoursesProvider=({children})=>{
	const [reset, setReset] = useState(false)
	const [selectedCourseId, setSelectedCourseId]=useState()
	const[enrolled, setEnrolled]= useState(false)

	const title ={
		0: 'Course Details',
		1: 'Calendar',
	}

	const [page, setPage] = useState(0)
	const initialValues ={
		title: '',
		category: '',
		academic_level: '',
		course_type: 'online',
		duration: '',
		fee: '',
		description: '',
	}
	const [data, setData] = useState(initialValues)

useEffect(() => {
	if(reset===true){
		setData(initialValues)
		setReset(false)
		setSelectedCourseId()
		setEnrolled(false)
	}
}, [reset])

	const disablePrev = page === 0;
	const disableNext = page === 1;
	const prevHide = page === 0;
	const nextHide = page === 1;
	
	return(
		<FormCoursesContext.Provider value={{ title, page, setPage, disableNext, disablePrev, prevHide, nextHide, data, setData, reset, setReset, selectedCourseId, setSelectedCourseId, enrolled, setEnrolled }}>
			{children}
		</FormCoursesContext.Provider>
	)
}
 export default FormCoursesContext
