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
    
    {label: "Online",
		id:"online",
			type:"radio",
			placeholder:"",
      value:"Online",
			name:"course_type"
		},
    
    {label: "Physical",
		id:"physical",
			type:"radio",
			placeholder:"",
      value:"Physical",
			name:"course_type"
		},
    {label: "Both",
		id:"both",
			type:"radio",
			placeholder:"",
      value:"Both",
			name:"course_type"
		}
  ])
  const[items, setItems] = useState([
		{label: "New Course Name",
		id:"course-name",
			type:"text",
			placeholder:"e.g. Piano, Guitar, English",
			value:undefined,
			name:"course_name"
		},
		{label: "Category",
		id:"category",
			type:"text",
			placeholder:"e.g. Languages, Mathematics",
			value:undefined,
			name:"category"
		},
   		{label: "New Description",
		id:"description",
			type:"text",
			placeholder:"Brief description of the course",
			value:undefined,
			name:"description"
		},
   
		{label: "New Duration",
		id:"duration",
			type:"number",
			placeholder:"Duration in minutes",
			value:undefined,
			name:"duration"
		},
   
		{label: "Updated Fee",
		id:"fee",
			type:"number",
			placeholder:"Fee in $",
			value:undefined,
			name:"fee"
		}
	])
  return (
    <>
      <div className="title">
        <h2>Add a course!</h2>
      </div>
      <form className="login-form">
        <FetchItems items={items} />
      

        <div className="form-group">
          <label>How will you conduct your lessons?</label>
          <br />
           <div className="radio-group">
            <FetchItems items={radioOptions} />
            
          </div> 
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
