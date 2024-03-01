import NavBar from "./NavBar"
import Home from "./components/Home"
import Courses from "./components/Courses"
import MyDesk from "./components/MyDesk"
import About from "./components/About"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mydesk/*" element={<MyDesk />}>
          {/* <Route path="calendar" element={<MyDesk />} /> */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login/*" element={<Login />}>
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}
