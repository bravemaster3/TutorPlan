import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
export default function SignInUpRadioGroup({ setAccountTypeFun }) {
  const handleChoice = (e) => {
    console.log(e.target.value) // Add this line
    console.log("HANDLECHOICE: I HAVE BEEN TRIGGERED")
    setAccountTypeFun(e.target.value)
  }
  return (
    <div className="form-group">
      <label>
        Are you a tutor or a student?{" "}
        <abbr data-title="Only Tutors can add a course">
          <FontAwesomeIcon icon={faInfoCircle} />
        </abbr>
      </label>
      <br />
      <div className="radio-group">
        <label htmlFor="student">Student</label>
        <input
          type="radio"
          id="student"
          name="account_type"
          value="student"
          defaultChecked
          onChange={handleChoice}
        />

        <label htmlFor="tutor">Tutor</label>
        <input
          type="radio"
          id="tutor"
          name="account_type"
          value="tutor"
          onChange={handleChoice}
        />
      </div>
    </div>
  )
}
