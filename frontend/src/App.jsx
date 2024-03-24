import NavBar from "./NavBar"
import Home from "pages/Home"
import Courses from "pages/Courses"
import MyDesk from "pages/MyDesk"
import About from "pages/About"
import Login from "pages/Login"
import SignUp from "components/loginComponents/SignUp"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "src/apiConfig"
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
      localStorage.removeItem("userId")
      localStorage.removeItem("user")
      // console.log(localStorage.getItem("isAuthenticated"))
      setAuthenticated(false)
    }
  }

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
        localStorage.setItem("user", JSON.stringify(response.data))
        NavigateTo("/mydesk")
      })
      .catch((error) => alert("wrong username, password or account type"))
  }
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
