import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Courses, Home, MyDesk, Register, SignIn, SignUp } from './components'
import Layout from './components/Layout'
import Missing from './components/Missing'
import { BookingPolicy, UserCalendar, UserCourses, UserDesk, UserProfile, ViewOtherUsers } from './components/MyDeskPages'
import Login from './components/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import RequireAuth from './components/RequireAuth'
import useAuth from './hooks/useAuth'





function App() {
  const { auth } = useAuth();
  const isTutor = auth.roles === 'tutor'

  return (
    <Routes>
      {/*  <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
      </Route>
      <Route element={<Login />} path="/login" /> */}


      <Route path="/" element={<Layout />} >
        {/*  public routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* protected route */}
        <Route element={<RequireAuth />}>
          <Route path="/mydesk" element={<MyDesk />}>
            <Route path="desk" element={<UserDesk />} />
            <Route path="" element={<UserDesk />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="calendar" element={<UserCalendar />} />
            <Route path="mycourses" element={<UserCourses />} />
            <Route path={isTutor ? "students" : "tutors"} element={<ViewOtherUsers />} />
            <Route path="booking-policy" element={<BookingPolicy />} />
          </Route>
        </Route>




        {/* not found */}
        <Route path="*" element={<Missing />} />
      </Route>



    </Routes >
/*     <>
      <div className="">
        <NavBar />
        <div className="mx-auto ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route
              path="/mydesk/*"
              element={<MyDesk />}
            >
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>

      </div>
    </> */
  )
}

export default App
/* buttons = {
  [
    {
      id: "btn_1",
      className: "flex justify-between items-center gap-4  m-3 p-4 border border-white rounded-sm text-white",
      label: "Click me!",
      leftIcon: {
        className: "w-[32] h-[32]",
        src: "/src/assets/react.svg"
      },
      rightIcon: {
        className: "w-[32] h-[32]",
        src: "/src/assets/react.svg"
      }
    },
  {
    id: "btn_2",
    className: "flex justify-between items-center gap-4  m-3 p-4 border border-white rounded-sm text-white",
    label: "Click me!",
    leftIcon: {
      className: "w-[32] h-[32]",
      src: "/src/assets/react.svg"
    },
    rightIcon: {
      className: "w-[32] h-[32]",
      src: "/src/assets/react.svg"
    }
  }
  ]
} */
