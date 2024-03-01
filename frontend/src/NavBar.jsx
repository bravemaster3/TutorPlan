import { Link, useMatch } from "react-router-dom"
import CustomLink from "./components/CustomLink"
export default function NavBar() {
  return (
    <div className="container-fluid navbar-container">
      <nav className="navbar bg-color-custom navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="logo-img"
              src="/src/assets/images/logo.png"
              alt="TutorPlan"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <CustomLink to="/home">HOME</CustomLink>
              <CustomLink to="/courses">COURSES</CustomLink>
              <CustomLink to="/mydesk">MY DESK</CustomLink>
              {/* <CustomLink
                to={[
                  "/mydesk",
                  "/mydesk/calendar",
                  "/mydesk/mycourses",
                  "/mydesk/students",
                  "/mydesk/tutors",
                  "/mydesk/profile",
                ]}
              > 
                MY DESK
              </CustomLink>*/}
              <CustomLink to="/about">ABOUT US</CustomLink>
              <CustomLink to="/login">SIGN IN/UP</CustomLink>
              {/* <CustomLink to={["/login", "/login/sign-up"]}>
                SIGN IN/UP
              </CustomLink> */}
              {/* <CustomLink to="/login/sign-up">UP</CustomLink> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}