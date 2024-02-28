import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
export default function SignUp() {
  return (
    <>
      <div className="container-fluid login">
        <div className="generic-form">
          <CloseIcon />
          <Registration />
        </div>
      </div>
    </>
  )
}

function Registration() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="title">
        <h2>Join us!</h2>
        <p>You are signing up as a User</p>
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            name="first_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            name="last_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Phone Number"
            name="phone_number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              name="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
              tabIndex={-1}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password-confirm"
            placeholder="Confirm your password"
          />
        </div>

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
            />

            <label htmlFor="tutor">Tutor</label>
            <input type="radio" id="tutor" name="account_type" value="tutor" />
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="sign-in">
            SIGN UP
          </button>
          <div className="separator">OR</div>
          <button type="button" className="sign-in-g">
            Continue with{" "}
            <img className="google" src="src/assets/images/google.png"></img>
          </button>
        </div>
      </form>
      <div className="sign-up">
        Already have an account?{" "}
        <Link to="/login" className="sign-up-link">
          Sign in
        </Link>
      </div>
    </>
  )
}
