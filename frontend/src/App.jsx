/* import NavBar from "./NavBar" */
import NavBar from "./AltNavBar"
import Home from "./components/Home"
import Courses from "./components/Courses"
import MyDesk from "./components/MyDesk"
import About from "./components/About"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CompletedForm from "./components/CompletedForm"
import NewForm from "./NewForm"
import SignInNewForm from "./SignInNewForm"
import SignUpNewForm from "./SignUpNewForm"
import AddCourseNewForm from "./AddCourseNewForm"
import styles from './style'
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components'

export default function App() {
  const [items, setItems] = useState([
    {
      labelTitle: "Course Name",
      id: "course-name",
      type: "text",
      placeholder: "e.g. Piano, Guitar, English",
      value: undefined,
      labelName: "course_name"
    },
    {
      labelTitle: "Category",
      id: "category",
      type: "text",
      placeholder: "e.g. Languages, Mathematics",
      value: undefined,
      labelName: "category"
    }
  ])

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
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar></Navbar>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>


      {/* <NavBar authenticated={authenticated} handleLogout={handleLogout} /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInNewForm />} />
        <Route path="/sign-up" element={<SignUpNewForm />} />
        <Route path="/new-course" element={<AddCourseNewForm />} />

        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/mydesk/*"
          element={<MyDesk authenticated={authenticated} />}
        >
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login/*" element={<Login handleSignIn={handleSignIn} />}>
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>

    </>
  )
}
