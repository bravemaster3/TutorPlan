import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"

export default function Login() {
  return (
    <>
      <div className="container-fluid login">
        <div className="generic-form">
          <CloseIcon />
          <SignIn />
        </div>
      </div>
    </>
  )
}

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="title">
        <h2>Welcome back!</h2>
        <p>You are signing in as a User</p>
      </div>
      <form className="login-form">
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

        <div className="button-group">
          <button type="submit" className="sign-in">
            SIGN IN
          </button>
          <div className="separator">OR</div>
          <button type="button" className="sign-in-g">
            Continue with{" "}
            <img className="google" src="src/assets/images/google.png"></img>
          </button>
        </div>
      </form>
      <div className="sign-up">
        New to TutorPlan?{" "}
        <Link to="/sign-up" className="sign-up-link">
          Create account
        </Link>
      </div>
    </>
  )
}
