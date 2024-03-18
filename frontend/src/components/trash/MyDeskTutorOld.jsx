import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faCalendarAlt,
  faBook,
  faBookAtlas,
  faBookDead,
  faBookOpenReader,
  faBookReader,
  faPeopleGroup,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons"
export default function MyDeskTutor() {
  return (
    <div className="mydesk">
      {/* <div className="row"> */}
      <div className="sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link" aria-current="page">
              <FontAwesomeIcon
                icon={faUser}
                className="pe-none me-3"
                width="25px"
                height="25px"
              />
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="pe-none me-3"
                width="25px"
                height="25px"
              />
              Calendar
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  active">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="pe-none me-3"
                width="25px"
                height="25px"
              />
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="pe-none me-3"
                width="25px"
                height="25px"
              />
              Students
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="pe-none me-3"
                width="25px"
                height="25px"
              />
              Booking Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="courses">This is a random course</div>
    </div>
    // </div>
  )
}
