import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function CloseIconSimple({ handleClose }) {
  return (
    <div className="icon-container">
      <button type="button" onClick={handleClose}>
        <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
      </button>
    </div>
  )
}
