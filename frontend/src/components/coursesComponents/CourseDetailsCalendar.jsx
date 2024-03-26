import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import "react-big-calendar/lib/css/react-big-calendar.css"

import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

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
      {isCourseTutor && !event.booked ? (
        event.thisCourse ? (
          <button
            className="delete-booking-btn"
            // onClick={() => handleEventDelete(event.autoId)}
            onClick={() => handleEventDelete(event.id)}
          >
            <FontAwesomeIcon icon={faTrash} size="sm"></FontAwesomeIcon>
          </button>
        ) : null
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
      {event.title}
    </div>
  )

  // const dayPropGetter = (date) => {
  //   const now = new Date()
  //   now.setHours(0, 0, 0, 0)
  //   if (date < now) {
  //     return {
  //       className: "past-date",
  //       style: {
  //         backgroundColor: "#ccc",
  //       },
  //     }
  //   }
  // }

  return seesCalendar ? (
    <DnDCalendar
      // minDate={new Date()}
      className="calendar-specific-course"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={handleSelect}
      views={["month", "week", "day"]}
      // defaultView={defaultView}
      defaultView="week"
      onView={handleViewChange}
      components={{
        event: EventComponent,
        // dateCellWrapper: DateCell,
      }}
      step={selectedCourse.duration}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: event.thisCourse ? "lightblue" : "lightgrey",
          opacity: event.thisCourse ? "1" : "0.4",
          color: "black",
          border: "none",
        },
      })}
      // dayPropGetter={dayPropGetter}
    />
  ) : null
}

export default CourseCalendar
