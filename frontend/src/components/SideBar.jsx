// App.js

import { useState } from "react"
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <MagicMotion>
      <div className="sidebar-container">
        <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
          <div className={`header ${isCollapsed ? "collapsed" : ""}`}>
            {/* {!isCollapsed && <h4 className="company-name">Company Portfolio</h4>} */}

            <button
              className="toggle-button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <FontAwesomeIcon
                  icon={faUpRightAndDownLeftFromCenter}
                  className="fa-icon-toggle"
                />
              ) : (
                <FontAwesomeIcon icon={faXmark} className="fa-icon-toggle" />
              )}
            </button>
          </div>

          <ul className="menu-list">
            <MenuItem to="/mydesk/calendar" icon={faCalendar} text="Calendar" />
            <MenuItem
              to="/mydesk/mycourses"
              icon={faBookReader}
              text="Courses"
            />
            <MenuItem
              to="/mydesk/students"
              icon={faUserGraduate}
              text="Students"
            />
            {/* <MenuItem to="/mydesk/tutors" icon={faUserGraduate} text="Tutors" /> */}
            <MenuItem to="/mydesk/profile" icon={faUser} text="Profile" />
            <MenuItem
              to="/mydesk/booking-policy"
              icon={faInfoCircle}
              text="Booking Policy"
            />

            {/* Add more menu items as needed */}
          </ul>
        </aside>
      </div>
    </MagicMotion>
  )
}

const MenuItem = ({ to, icon, text }) => (
  <li className="menu-item">
    <Link to={to} className="menu-link">
      <FontAwesomeIcon icon={icon} className="fa-icon" />
      {text}
    </Link>
  </li>
)