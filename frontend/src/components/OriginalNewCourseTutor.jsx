import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
import FormContent from "./FormContent"
import FetchItems from "./FetchItems"
import Radio from "./Radio"
export default function NewCourseTutor() {
  return (
    <>
      <CourseRegistration />
    </>
  )
}

function CourseRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  const[radioOptions, setRadioOptions] = useState([
    
    {labelTitle: "Online",
		id:"online",
			type:"radio",
			placeholder:"",
      value:"Online",
			labelName:"course_type"
		},
    
    {labelTitle: "Physical",
		id:"physical",
			type:"radio",
			placeholder:"",
      value:"Physical",
			labelName:"course_type"
		},
    {labelTitle: "Both",
		id:"both",
			type:"radio",
			placeholder:"",
      value:"Both",
			labelName:"course_type"
		}
  ])
  const[items, setItems] = useState([
		{labelTitle: "New Course Name",
		id:"course-name",
			type:"text",
			placeholder:"e.g. Piano, Guitar, English",
			value:undefined,
			labelName:"course_name"
		},
		{labelTitle: "Category",
		id:"category",
			type:"text",
			placeholder:"e.g. Languages, Mathematics",
			value:undefined,
			labelName:"category"
		},
   		{labelTitle: "New Description",
		id:"description",
			type:"text",
			placeholder:"Brief description of the course",
			value:undefined,
			labelName:"description"
		},
   
		{labelTitle: "New Duration",
		id:"duration",
			type:"number",
			placeholder:"Duration in minutes",
			value:undefined,
			labelName:"duration"
		},
   
		{labelTitle: "Updated Fee",
		id:"fee",
			type:"number",
			placeholder:"Fee in $",
			value:undefined,
			labelName:"fee"
		}
	])
  return (
    <>
      <div className="title">
        <h2>Add a course!</h2>
      </div>
      <form className="login-form">

			

        <div className="form-group">
          <label htmlFor="course-name">Course Name</label>
          <input
            type="text"
            id="course-name"
            placeholder="e.g. Piano, Guitar, English"
            name="course_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="e.g. Languages, Mathematics"
            name="category"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Brief description of the course"
            name="description"
          />
        </div>

        <div className="form-group">
          <label>How will you conduct your lessons?</label>
          <br />
           <div className="radio-group">
            
            <label htmlFor="online">Online</label>
            <input
              type="radio"
              id="online"
              name="course_type"
              value="Online"
              defaultChecked
            />

            <label htmlFor="physical">Physical</label>
            <input
              type="radio"
              id="physical"
              name="course_type"
              value="Physical"
            />

            <label htmlFor="both">Both</label>
            <input type="radio" id="both" name="course_type" value="Both" />
          </div> 
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            placeholder="Duration in minutes"
            name="duration"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fee">Fee</label>
          <input type="number" id="fee" placeholder="Fee in $" name="fee" />
        </div>
        <div className="button-group">
          <button type="submit" className="sign-in">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  )
}


/* TODO: 
Needs refactoring consider using props drilling */
