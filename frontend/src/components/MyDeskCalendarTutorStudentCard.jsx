import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CloseIconSimple from "./CloseIconSimple"
import { format } from "date-fns"
// import { FaWhatsapp } from "react-icons/fa"
import { faCopy } from "@fortawesome/free-solid-svg-icons"

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
        <div className="student-card">
          <div className="photo-personal-details">
            <div className="profile-photo-div">
              <img
                className="profile-photo"
                src="https://via.placeholder.com/128x128"
                alt="Student"
              />
            </div>
            <div className="personal-info">
              <p>
                <strong>First Name:</strong> {selectedStudent.first_name}
              </p>
              <p>
                <strong>Last Name:</strong> {selectedStudent.last_name}
              </p>
              <p>
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <div>
                <p>
                  <strong>Phone:</strong> {selectedStudent.phone_number}{" "}
                  <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
          {/* <hr /> */}

          {/* <div className="bio">{selectedStudent.bio || "No bio available"}</div> */}
          <hr />
        </div>
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
