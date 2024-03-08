import { Routes, Route } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import CloseIcon from "./CloseIcon"
export default function Login({ handleSignIn }) {
  return (
    <div className="container-fluid login">
      {/* <div className="modal-bg"> */}
      <div className="generic-form">
        <CloseIcon />
        <Routes>
          <Route path="/" element={<SignIn handleSignIn={handleSignIn} />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
    // </div>
  )
}
