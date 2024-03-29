import { useEffect, useState } from "react"
import { MagicMotion } from "react-magic-motion"
import {
  faCalendar,
  faUserGraduate,
  faBookReader,
  faUser,
  faInfoCircle,
  faBuilding,
  faRocket,
  faXmark,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons"
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb"
import { VscCollapseAll } from "react-icons/vsc"
import { BiCollapseHorizontal } from "react-icons/bi"
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"
export default function SideBar({ authenticated }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [accountType, setAccountType] = useState(
    localStorage.getItem("accountType")
  )
  const [studentsOrTutors, setStudentsOrTutors] = useState("")
  const [routeStudentsOrTutors, setRouteStudentsOrTutors] = useState("")

  useEffect(() => {
    if (authenticated) {
      setAccountType(localStorage.getItem("accountType"))
      if (accountType === "tutor") {
        setStudentsOrTutors("Students")
      } else if (accountType === "student") {
        setStudentsOrTutors("Tutors")
      }
    }
  }, [authenticated])

  // Function to toggle sidebar between collapsed, expanded, and hidden states
  const toggleSidebar = () => {
    if (isHidden) {
      // If currently hidden, show the sidebar in expanded state
      setIsHidden(false)
      setIsCollapsed(false)
    } else if (isCollapsed) {
      // If currently collapsed, expand the sidebar
      setIsCollapsed(false)
      setIsHidden(true)
    } else {
      // If currently expanded, collapse the sidebar
      setIsCollapsed(true)
    }
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-hide" onClick={toggleSidebar}>
        {isCollapsed ? (
          <VscCollapseAll title="Hide Sidebar" />
        ) : isHidden ? (
          <TbLayoutSidebarLeftExpandFilled title="Expand Sidebar" />
        ) : (
          <TbLayoutSidebarLeftCollapseFilled title="Collapse Sidebar" />
        )}
      </div>
      <aside
        className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
          isHidden ? "hidden" : ""
        }`}
      >
        <ul className="menu-list">
          <MenuItem to="/mydesk/calendar" icon={faCalendar} text="Calendar" />
          <MenuItem to="/mydesk/mycourses" icon={faBookReader} text="Courses" />
          <MenuItem
            to={`/mydesk/${studentsOrTutors.toLowerCase()}`}
            icon={faUserGraduate}
            text={studentsOrTutors}
          />
          <MenuItem to="/mydesk/profile" icon={faUser} text="Profile" />
          <MenuItem
            to="/mydesk/booking-policy"
            icon={faInfoCircle}
            text="Booking Policy"
          />
        </ul>
      </aside>
    </div>
  )
}

const MenuItem = ({ to, icon, text }) => {
  let location = useLocation()
  let updatedLocation = location.pathname.endsWith("mydesk")
    ? location.pathname.replace("/mydesk", "/mydesk/calendar")
    : location.pathname

  const isActive = updatedLocation === to
  const menuItemClasses = isActive ? "menu-item active" : "menu-item"
  return (
    <li className={menuItemClasses}>
      <Link to={to} className="menu-link">
        <FontAwesomeIcon icon={icon} className="fa-icon" />
        {text}
      </Link>
    </li>
  )
}
