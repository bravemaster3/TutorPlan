import React from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import Button from './components/Primitives/Button'

 */
import { InputField, Button, GenerateComponents, BaseForm, CourseCard } from './components/Primitives'
import { buttonData, courseData, inputFieldData, sampleFormData } from './constants'
import { Route, Routes } from 'react-router-dom'
import { About, Courses, Home, MyDesk, NavBar, SignIn, SignUp } from './components'
import MyComponent from './components/AltSignIn'


function App() {
  const [count, setCount] = useState(0)
  console.log(courseData)
  return (
    <>
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
            <Route path="/login/*" element={<SignIn />}>
              <Route path="sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </div>

      </div>
    </>
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
