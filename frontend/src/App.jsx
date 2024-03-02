import NavBar from "./NavBar"
import Home from "./components/Home"
import Courses from "./components/Courses"
import MyDesk from "./components/MyDesk"
import About from "./components/About"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

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
      console.log(localStorage.getItem("isAuthenticated"))
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("accountType")
      console.log(localStorage.getItem("isAuthenticated"))
      setAuthenticated(false)
    }
  }

  const handleSignIn = (event) => {
    event.preventDefault()
    // const accountType = $('input[name="account_type"]:checked').val()
    localStorage.setItem("isAuthenticated", true)
    localStorage.setItem(
      "accountType",
      $('input[name="account_type"]:checked').val()
    )
    setAuthenticated(true)
    NavigateTo("/mydesk")
  }

  return (
    <>
      <NavBar authenticated={authenticated} handleLogout={handleLogout} />
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
        <Route path="/login/*" element={<Login handleSignIn={handleSignIn} />}>
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}
