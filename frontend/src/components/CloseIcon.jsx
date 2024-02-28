import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function CloseIcon() {
  const navigate = useNavigate()
  const closeModal = () => {
    navigate(-1)
  }
  return (
    <div className="icon-container">
      <button type="button" onClick={closeModal}>
        <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
      </button>
    </div>
  )
}
