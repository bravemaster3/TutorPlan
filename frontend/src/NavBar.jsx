import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function NavBar() {
  return (
    <>
      <nav className="navbar bg-color-custom navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LOGO
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
              <CustomLink to="/about">ABOUT US</CustomLink>
              <CustomLink to="/login">SIGN IN/UP</CustomLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className="nav-item mx-3">
      <Link
        className={isActive ? "nav-link active" : "nav-link default"}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
