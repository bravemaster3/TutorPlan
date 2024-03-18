import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CloseIconSimple from "components/otherComponents/CloseIconSimple"
import { format } from "date-fns"
// import { FaWhatsapp } from "react-icons/fa"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FaIcons } from "react-icons/fa"
import { useState } from "react"
import PersonCard from "./PersonCard"

export default function MyDeskCalendarTutorStudentCard({
  toggleModal,
  selectedStudent,
  event,
}) {
  return (
    <div className="modal-bg">
      <div className="generic-form modal show specific-booking" tabIndex={0}>
        <CloseIconSimple handleClose={toggleModal} />
        <h2>Student details</h2>
        <PersonCard user={selectedStudent} />
        <div className="time-slot-info">
          <div>
            <h4>
              {event.course.title}, {format(event.start, "MMMM do, yyyy")}
            </h4>
          </div>
          <div>
            From <strong>{format(event.start, "hh:mm a")}</strong> To{" "}
            <strong>{format(event.end, "hh:mm a")}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
