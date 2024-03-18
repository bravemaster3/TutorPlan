import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "./CloseIcon"
import SignInUpRadioGroup from "./SignInUpRadioGroup"
import { API_BASE_URL } from "../apiConfig"
import axios from "axios"
export default function SignUp({ handleSignUp }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("") //This can be used for confirming that the two passwords match
  const [accountType, setAccountType] = useState("")

  // const handleSignUp = (e) => {
  //   e.preventDefault()
  //   const url = `${API_BASE_URL}/${accountType}s`
  //   console.log(url)
  //   const data = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email: email,
  //     phone_number: phoneNumber,
  //     country: country,
  //     password: password,
  //   }
  //   axios
  //     .post(url, data)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       alert("An error has occured. Signup was unsuccessful")
  //     })
  // }

  const allProps = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    email: email,
    setEmail: setEmail,
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
    country: country,
    setCountry: setCountry,
    password: password,
    setPassword: setPassword,
    passwordConfirm: passwordConfirm,
    setPasswordConfirm: setPasswordConfirm,
    accountType: accountType,
    setAccountType: setAccountType,
    handleSignUp: handleSignUp,
  }

  return (
    <>
      {/* <div className="container-fluid login"> */}
      {/* <div className="generic-form"> */}
      {/* <CloseIcon /> */}
      <Registration {...allProps} />
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

function Registration({
  e,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  country,
  setCountry,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  accountType,
  setAccountType,
  handleSignUp,
  // setFirstName,
  // setLastName,
  // setEmail,
  // setPhoneNumber,
  // setCountry,
  // setPassword,
  // setPasswordConfirm,
  // setAccountType,
  // handleSignUp,
}) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="title">
        <h2>Join us!</h2>
        <p>You are signing up as a User</p>
      </div>
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSignUp(
            e,
            accountType,
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            password
          )
        }}
      >
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            name="first_name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            name="last_name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Phone Number"
            name="phone_number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter your country"
            name="country"
            required
            onChange={(e) => setCountry(e.target.value)}
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
              required
              onChange={(e) => setPassword(e.target.value)}
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
            required
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <SignInUpRadioGroup setAccountType={setAccountType} />

        {/* <div className="form-group">
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
              onChange={(e) => {
                setAccountType(e.target.value)
              }}
            />

            <label htmlFor="tutor">Tutor</label>
            <input
              type="radio"
              id="tutor"
              name="account_type"
              value="tutor"
              onChange={(e) => {
                setAccountType(e.target.value)
              }}
            />
          </div>
        </div>
 */}
        {/* mlsqcmq, */}

        <div className="button-group">
          <button type="submit" className="sign-in">
            SIGN UP
          </button>
          <div className="separator">OR</div>
          <button type="button" className="sign-in-g">
            Continue with{" "}
            <img className="google" src="/src/assets/images/google.png"></img>
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
