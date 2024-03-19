import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import CloseIcon from "src/components/otherComponents/CloseIcon"
import SignInUpRadioGroup from "./SignInUpRadioGroup"
import { API_BASE_URL } from "src/apiConfig"
import axios from "axios"
import md5 from "md5"
export default function SignUp() {
  const navigateTo = useNavigate()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    password: "",
    account_type: "",
  })

  const [accountTypeSignUp, setAccountTypeSignUp] = useState("student")

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: md5(value),
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    // console.log(accountTypeSignUp) // Add this line
    const url = `${API_BASE_URL}/${accountTypeSignUp}s`
    // console.log(url)
    // console.log(formData)
    const data = formData
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occured. Signup was unsuccessful")
        console.log(error)
      })

    navigateTo("/login")
  }

  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="title">
        <h2>Join us!</h2>
        <p>You are signing up as a {accountTypeSignUp}</p>
      </div>
      <form className="login-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            name="first_name"
            required
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number">
            Phone Number{" "}
            <abbr data-title="Whatsapp preferably">
              <FontAwesomeIcon icon={faInfoCircle} />
            </abbr>
          </label>
          <input
            type="text"
            id="phone-number"
            placeholder="Phone Number"
            name="phone_number"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            name="city"
            required
            onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <SignInUpRadioGroup setAccountTypeFun={setAccountTypeSignUp} />

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
