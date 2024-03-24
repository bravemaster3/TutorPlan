import { Link, useLocation } from "react-router-dom"

export default function CustomLink({ to, children, ...props }) {
  const location = useLocation()

  const isActiveLink = (targetPath) => {
    const currentPath = location.pathname
    // Treat "/" as "/home"
    const treatedCurrentPath = currentPath === "/" ? "/home" : currentPath
    const treatedTargetPath = targetPath === "/" ? "/home" : targetPath
    return (
      treatedCurrentPath === treatedTargetPath ||
      (treatedCurrentPath.startsWith("/mydesk") &&
        treatedTargetPath.startsWith("/mydesk"))
    )
  }

  const linkClassName = isActiveLink(to)
    ? "nav-link active"
    : "nav-link default"

  return (
    <li className="nav-item mx-3">
      <Link className={linkClassName} to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
