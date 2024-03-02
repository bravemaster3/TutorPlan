import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons"
import { stringToColor } from "./utils"

export default function MyDeskCalendarTutor() {
  const localizer = momentLocalizer(moment)

  const [bookings, setBookings] = useState([
    {
      id: 1,
      course_title: "Piano lessons",
      tutor_name: "John Doe",
      start_time: "2024-02-29 13:00:00",
      end_time: "2024-02-29 15:00:00",
    },
    {
      id: 2,
      course_title: "Fun math",
      tutor_name: "Janette Mate",
      start_time: "2024-03-01 09:00:00",
      end_time: "2024-03-01 13:00:00",
    },

    {
      id: 3,
      course_title: "Fun math",
      tutor_name: "Janette Mate",
      start_time: "2024-03-02 17:00:00",
      end_time: "2024-03-02 19:00:00",
    },
  ])

  const events = bookings.map((booking) => ({
    id: booking.id,
    start: new Date(booking.start_time),
    end: new Date(booking.end_time),
    title: `${booking.course_title} with ${booking.tutor_name}`,
    color: stringToColor(booking.course_title),
  }))

  const handleEventDelete = (eventId) => {
    setBookings(bookings.filter((booking) => booking.id !== eventId))
  }

  const EventComponent = ({ event }) => (
    <div className="calendar-event">
      <button
        className="delete-booking-btn"
        onClick={() => handleEventDelete(event.id)}
      >
        <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
      </button>
      {event.title}
    </div>
  )

  return (
    <>
      <div className="calendar-header">
        <div className="title">
          <h3>Hey Peter,</h3>
          <h4>Here are your appointments</h4>
        </div>
        <button>Save changes</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="calendar"
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color, // Use the color stored in the event
          },
        })}
        components={{
          event: EventComponent,
        }}
      />
    </>
  )
}
