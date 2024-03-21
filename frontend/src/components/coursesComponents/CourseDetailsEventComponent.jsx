import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const EventComponent = ({
  event,
  isCourseTutor,
  seesCalendar,
  handleEventDelete,
  handleCheckboxChange,
  bookings,
}) => {
  return (
    <div className="calendar-event">
      {event.title}
      {isCourseTutor ? (
        <button
          className="delete-booking-btn"
          onClick={() => handleEventDelete(event.id)}
        >
          <FontAwesomeIcon icon={faTrash} size="sm"></FontAwesomeIcon>
        </button>
      ) : (
        ""
      )}

      {seesCalendar && !isCourseTutor ? (
        <input
          type="checkbox"
          className="select-slot-checkbox"
          checked={bookings.some(
            (booking) => booking.availability_id === event.id
          )}
          onChange={(e) => handleCheckboxChange(e.target.checked, event.id)}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default EventComponent
