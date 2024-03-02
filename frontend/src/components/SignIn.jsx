import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
import SignInUpRadioGroup from "./SignInUpRadioGroup"
import SignInUpButtonGroup from "./SignInUpButtonGroup"
export default function SignIn({ handleSignIn }) {
  return (
    <>
      {/* <div className="container-fluid login"> */}
      {/* <div className="generic-form"> */}
      {/* <CloseIcon /> */}
      <SignInForm handleSignIn={handleSignIn} />
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

function SignInForm({ handleSignIn }) {
  const [showPassword, setShowPassword] = useState(false)
  // const [accountType, setAccountType] = useState("student")
  // const [authenticated, setAuthenticated] = useState(false)

  // const handleSignIn = (event) => {
  //   event.preventDefault()
  //   const accountType = $('input[name="account_type"]:checked').val()
  //   localStorage.setItem("isAuthenticated", true)
  //   localStorage.setItem("accountType", accountType)
  //   // setAuthenticated(true)
  // }

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

        <SignInUpRadioGroup />
        <SignInUpButtonGroup
          handleSignIn={handleSignIn}
          // authenticated={authenticated}
        />
      </form>
      <div className="sign-up">
        New to TutorPlan?{" "}
        <Link to="/login/sign-up" className="sign-up-link">
          Create account
        </Link>
      </div>
    </>
  )
}
