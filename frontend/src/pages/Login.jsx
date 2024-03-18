import { Routes, Route } from "react-router-dom"
import SignIn from "components/loginComponents/SignIn"
import SignUp from "components/loginComponents/SignUp"
import CloseIcon from "components/otherComponents/CloseIcon"
export default function Login({ handleSignIn }) {
  return (
    <div className="container-fluid login">
      <div className="generic-form">
        <CloseIcon />
        <Routes>
          <Route path="/" element={<SignIn handleSignIn={handleSignIn} />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  )
}
