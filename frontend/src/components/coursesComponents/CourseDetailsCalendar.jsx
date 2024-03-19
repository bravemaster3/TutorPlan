// CourseCalendar.jsx

import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import "react-big-calendar/lib/css/react-big-calendar.css"

import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import EventComponent from "./CourseDetailsEventComponent"

const DnDCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment)

const CourseCalendar = ({
  events,
  handleSelect,
  moveEvent,
  resizeEvent,
  defaultView,
  handleViewChange,
  handleEventDelete,
  seesCalendar,
  isCourseTutor,
  bookings,
  handleCheckboxChange,
  selectedCourse,
}) => {
  const EventComponent = ({ event }) => (
    <div className="calendar-event">
      {event.title}
      {isCourseTutor && !event.booked ? (
        <button
          className="delete-booking-btn"
          // onClick={() => handleEventDelete(event.autoId)}
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

  return seesCalendar ? (
    <DnDCalendar
      className="calendar-specific-course"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={handleSelect}
      views={["month", "week", "day", "agenda"]}
      // defaultView={defaultView}
      defaultView="week"
      onView={handleViewChange}
      components={{
        event: EventComponent,
      }}
      step={selectedCourse.duration}
    />
  ) : null
}

export default CourseCalendar
