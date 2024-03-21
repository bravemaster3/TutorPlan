import { Link, useMatch } from "react-router-dom"
import CustomLink from "components/otherComponents/CustomLink"
import { useEffect, useState } from "react"
export default function NavBar({ authenticated, handleLogout }) {
  // const [authenticated, setAuthenticated] = useState(false)
  // useEffect(() => {
  //   const updateAuth = () => {
  //     const authStatus = localStorage.getItem("isAuthenticated")
  //     setAuthenticated(authStatus === null ? false : JSON.parse(authStatus))
  //   }
  //   updateAuth()
  //   window.addEventListener("storage", updateAuth)

  //   return () => {
  //     window.removeEventListener("storage", updateAuth)
  //   }
  // }, [authenticated])

  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const handleMenuItemClick = () => {
    setExpanded(false)
  }
  return (
    <div className="container-fluid navbar-container">
      <nav className="navbar bg-color-custom navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo-img" src="/logo.png" alt="TutorPlan"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={expanded}
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <CustomLink to="/home" onClick={handleMenuItemClick}>
                HOME
              </CustomLink>
              <CustomLink to="/courses" onClick={handleMenuItemClick}>
                COURSES
              </CustomLink>
              <CustomLink to="/mydesk" onClick={handleMenuItemClick}>
                MY DESK
              </CustomLink>
              <CustomLink to="/about" onClick={handleMenuItemClick}>
                ABOUT US
              </CustomLink>
              {authenticated === false ? (
                <button className="btn sign-in">
                  <CustomLink to="/login" onClick={handleMenuItemClick}>
                    SIGN IN/UP
                  </CustomLink>
                </button>
              ) : (
                <button className="btn logout" onClick={handleLogout}>
                  <CustomLink to="/home" onClick={handleMenuItemClick}>
                    LOGOUT
                  </CustomLink>
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
