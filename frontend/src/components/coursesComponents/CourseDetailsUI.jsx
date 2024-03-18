// CourseDetailsUI.jsx

import React, { useEffect, useRef, useState } from "react"
import CourseCalendar from "./CourseDetailsCalendar"
import CourseDetailsForm from "./CourseDetailsForm"
import CloseIconSimple from "components/otherComponents/CloseIconSimple"
import CopyToClipboard from "../otherComponents/CopyToClipboard"

const CourseDetailsUI = ({
  seesCalendar,
  isCourseTutor,
  events,
  handleSelect,
  moveEvent,
  resizeEvent,
  defaultView,
  handleViewChange,
  selectedCourse,
  formData,
  setFormData,
  handleChange,
  handleCourseTypeChoice,
  handleAddCourse,
  toggleEdit,
  toggleModal,
  editCourse,
  isLoading,
  handleEnrollment,
  handleCalendarSave,
  bookings,
  handleEventDelete,
  handleCheckboxChange,
}) => {
  // console.log("SELECTED COURSE", selectedCourse)
  // const modalRef = useRef()

  // useEffect(() => {
  //   modalRef.current.focus()
  // }, [])

  // const [tutor, setTutor] = useState({})
  // useEffect(() => {
  //   setTutor(selectedCourse.tutor)
  // }, [selectedCourse])

  // console.log("SELECTED NOW", selectedCourse)

  return (
    <div className="modal-bg">
      <div
        // ref={modalRef}
        className="generic-form modal show specific-course-popup"
        tabIndex={0}
      >
        <CloseIconSimple handleClose={toggleModal} />
        <div className="specific-course-popup-row1">
          <h1>Course details</h1>
        </div>
        <div className="specific-course-popup-row2">
          <div>
            <CourseDetailsForm
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleCourseTypeChoice={handleCourseTypeChoice}
              handleAddCourse={handleAddCourse}
              selectedCourse={selectedCourse}
              toggleEdit={toggleEdit}
              editCourse={editCourse}
              isCourseTutor={isCourseTutor}
            />
            {seesCalendar && !isCourseTutor ? (
              <>
                <hr />
                <span>
                  <label>Tutor's name:</label> {selectedCourse.tutor.first_name}{" "}
                  {selectedCourse.tutor.last_name}
                </span>
                <hr />
                <span>
                  <label>Tutor's email: </label> {selectedCourse.tutor.email}
                </span>
                <hr />
                <span>
                  <label>Tutor's phone: </label>{" "}
                  {selectedCourse.tutor.phone_number}{" "}
                  <CopyToClipboard text={selectedCourse.tutor.phone_number} />
                </span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="calendar-specific-course-div">
            {seesCalendar ? (
              <CourseCalendar
                events={events}
                selectedCourse={selectedCourse}
                handleSelect={handleSelect}
                moveEvent={moveEvent}
                resizeEvent={resizeEvent}
                defaultView={defaultView}
                handleViewChange={handleViewChange}
                seesCalendar={seesCalendar}
                isCourseTutor={isCourseTutor}
                bookings={bookings}
                handleCheckboxChange={handleCheckboxChange}
                handleEventDelete={handleEventDelete}
              />
            ) : (
              // </DndProvider>
              <button className="enroll-btn" onClick={handleEnrollment}>
                <h2>Enroll to view calendar</h2>
              </button>
            )}
            {seesCalendar ? (
              <button
                className="save-calendar-btn"
                onClick={handleCalendarSave}
              >
                SAVE CHANGES
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsUI
