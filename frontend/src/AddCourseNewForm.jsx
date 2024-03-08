import React from 'react'
import { Link } from "react-router-dom"
import NewForm from './NewForm'
/* , subtitle, inputArr, submitBtn, redirect */
const AddCourseNewForm = () => {

	return <div className="generic-form"><NewForm
		title={'Adding course'}
		subtitle={null}
		inputArr={[
			{
				label: "Course Name",
				id: "course-name",
				type: "text",
				placeholder: "e.g. Piano, Guitar, English",
				value: undefined,
				name: "course_name"
			},
			{
				label: "Category",
				id: "category",
				type: "text",
				placeholder: "e.g. Languages, Mathematics",
				value: undefined,
				name: "category"
			},
			{
				label: "Description",
				id: "description",
				type: "text",
				placeholder: "Brief description of the course",
				value: undefined,
				name: "description"
			},

			{
				label: "Duration",
				id: "duration",
				type: "number",
				placeholder: "Duration in minutes",
				value: undefined,
				name: "duration"
			},

			{
				label: "Fee",
				id: "fee",
				type: "number",
				placeholder: "Fee in $",
				value: undefined,
				name: "fee"
			}
		]}
		radioGroup={{
			label: "How will you conduct your lessons?",
			options: [{
				label: "Student",
				id: "student",
				defaultChecked: true,
				type: "radio",
				placeholder: "",
				value: "student",
				name: "User"
			},

			{
				label: "Tutor",
				id: "tutor",
				type: "radio",

				value: "tutor",
				name: "User",

			}
			]
		}}
		submitBtn={'Submit'}
		redirect={null} /></div>;
};

export default AddCourseNewForm;
