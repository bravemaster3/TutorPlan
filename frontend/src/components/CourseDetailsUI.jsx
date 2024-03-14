// CourseDetailsUI.jsx

import React from "react"
import CourseCalendar from "./CourseDetailsCalendar"
import CourseDetailsForm from "./CourseDetailsForm"
import CloseIconSimple from "./CloseIconSimple"

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
  return (
    <div className="modal-bg">
      <div
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
