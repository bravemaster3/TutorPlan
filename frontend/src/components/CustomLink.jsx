// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function CustomLink({ to, children, ...props }) {
//   // const path = window.location.pathname
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//   return (
//     <li className="nav-item mx-3">
//       <Link
//         className={isActive ? "nav-link active" : "nav-link default"}
//         to={to}
//         {...props}
//       >
//         {children}
//       </Link>
//     </li>
//   )
// }

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function CustomLink({ to, children, ...props }) {
  const routes = Array.isArray(to) ? to : [to]
  const matches = routes.map((route) => {
    const resolvedPath = useResolvedPath(route)
    return useMatch({ path: resolvedPath.pathname, end: true })
  })
  const isActive = matches.some((match) => match)

  return (
    <li className="nav-item mx-3">
      <Link
        className={isActive ? "nav-link active" : "nav-link default"}
        to={routes[0]}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
