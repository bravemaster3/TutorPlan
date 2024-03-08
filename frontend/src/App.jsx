import NavBar from "./NavBar"
import Home from "./components/Home"
import Courses from "./components/Courses"
import MyDesk from "./components/MyDesk"
import About from "./components/About"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "./apiConfig"
export default function App() {
  const NavigateTo = useNavigate()

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") ? true : false
  )
  useEffect(() => {
    const updateAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      setAuthenticated(authStatus === null ? false : JSON.parse(authStatus))
    }
    updateAuth()
    window.addEventListener("storage", updateAuth)

    return () => {
      window.removeEventListener("storage", updateAuth)
    }
  }, [authenticated])

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // console.log(localStorage.getItem("isAuthenticated"))
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("accountType")
      // console.log(localStorage.getItem("isAuthenticated"))
      setAuthenticated(false)
    }
  }

  // const handleSignIn = (event) => {
  //   event.preventDefault()
  //   // const accountType = $('input[name="account_type"]:checked').val()
  //   localStorage.setItem("isAuthenticated", true)
  //   localStorage.setItem(
  //     "accountType",
  //     $('input[name="account_type"]:checked').val()
  //   )
  //   setAuthenticated(true)
  //   NavigateTo("/mydesk")
  // }

  const handleSignIn = (e, email, password, accountType) => {
    e.preventDefault()

    const url = `${API_BASE_URL}/${accountType}/login/${email}/${password}`
    console.log(url)
    axios
      .get(url)
      .then((response) => {
        setAuthenticated(true)
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("userId", response.data.id)
        localStorage.setItem(
          "accountType",
          response.data.__class__.toLowerCase()
          // $('input[name="account_type"]:checked').val()
        )
        NavigateTo("/mydesk")
      })
      .catch((error) => alert("wrong username, password or account type"))
  }

  // const handleSignUp = (
  //   e,
  //   accountType,
  //   firstName,
  //   lastName,
  //   email,
  //   phoneNumber,
  //   country,
  //   password
  // ) => {
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

  return (
    <>
      <NavBar authenticated={authenticated} handleLogout={handleLogout} />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/mydesk/*"
            element={<MyDesk authenticated={authenticated} />}
          >
            {/* <Route path="calendar" element={<MyDesk />} /> */}
          </Route>
          <Route path="/about" element={<About />} />
          <Route
            path="/login/*"
            element={<Login handleSignIn={handleSignIn} />}
          >
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
