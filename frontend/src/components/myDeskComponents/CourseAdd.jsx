import { useState, useEffect } from "react"

export default function CourseAdd({
  formData,
  setFormData,
  handleChange,
  handleCourseTypeChoice,
  handleAddCourse,
  formTitle,
  initialValues,
  editMode,
}) {
  // const [formData, setFormData] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false)

  if (setFormData) {
    useEffect(() => {
      if (editMode) {
        setFormData(initialValues)
      }
    }, [editMode, initialValues])
  }

  return (
    <>
      <div className="title">
        <h2>{formTitle}</h2>
      </div>
      <form className="login-form" onSubmit={handleAddCourse}>
        <div className="form-group">
          <label htmlFor="course-name">Course Name</label>
          {editMode ? (
            <input
              type="text"
              id="title"
              placeholder="e.g. Piano, Guitar, English"
              name="title"
              // defaultValue={initialValues.title}
              onChange={handleChange}
              required
              value={formData.title}
            />
          ) : (
            <span>
              : {initialValues.title} <hr />
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          {editMode ? (
            <input
              type="text"
              id="category"
              placeholder="e.g. Languages, Mathematics"
              name="category"
              onChange={handleChange}
              required
              value={formData.category}
            />
          ) : (
            <span>
              : {initialValues.category} <hr />
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          {editMode ? (
            <textarea
              type="text"
              id="description"
              placeholder="Brief description of the course"
              name="description"
              onChange={handleChange}
              value={formData.description ? formData.description : ""}
            />
          ) : (
            <span>
              :{" "}
              {initialValues.description
                ? initialValues.description
                : "No description available"}
              <hr />
            </span>
          )}
        </div>

        <div className="form-group">
          <label>How will you conduct your lessons?</label>
          <br />
          {editMode ? (
            <div className="radio-group">
              <label htmlFor="online">Online</label>
              <input
                type="radio"
                id="online"
                name="course_type"
                value="online"
                defaultChecked={editMode && formData.course_type === "online"}
                onChange={handleCourseTypeChoice}
                // disabled={!editMode}
              />

              <label htmlFor="physical">Physical</label>
              <input
                type="radio"
                id="physical"
                name="course_type"
                value="physical"
                checked={editMode && formData.course_type === "physical"}
                onChange={handleCourseTypeChoice}
                // disabled={!editMode}
              />

              <label htmlFor="both">Both</label>
              <input
                type="radio"
                id="both"
                name="course_type"
                value="both"
                checked={editMode && formData.course_type === "both"}
                onChange={handleCourseTypeChoice}
                // disabled={!editMode}
              />
            </div>
          ) : (
            <span>
              {initialValues.course_type}
              <hr />
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (min)</label>
          {editMode ? (
            <input
              type="number"
              id="duration"
              placeholder="Duration in minutes"
              name="duration"
              onChange={handleChange}
              required
              value={formData.duration}
            />
          ) : (
            <span>
              : {initialValues.duration} minutes <hr />
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="fee">Fee ($)</label>
          {editMode ? (
            <input
              type="number"
              id="fee"
              placeholder="Fee in $"
              name="fee"
              onChange={handleChange}
              required
              value={formData.fee}
            />
          ) : (
            <span>: ${initialValues.fee}</span>
          )}
        </div>

        <div className="button-group">
          {editMode && (
            <button type="submit" className="sign-in">
              SUBMIT
            </button>
          )}
        </div>
      </form>
    </>
  )
}

// import { useState } from "react"

// export default function CourseRegistration({
//   formData,
//   handleChange,
//   handleCourseTypeChoice,
//   handleAddCourse,
//   formTitle,
//   editMode,
// }) {
//   const [showPassword, setShowPassword] = useState(false)
//   return (
//     <>
//       <div className="title">
//         <h2>{formTitle}</h2>
//       </div>
//       <form className="login-form" onSubmit={handleAddCourse}>
//         <div className="form-group">
//           <label htmlFor="course-name">Course Name</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="e.g. Piano, Guitar, English"
//             name="title"
//             onChange={handleChange}
//             required
//             readOnly={!editMode}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="category">Category</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="e.g. Languages, Mathematics"
//             name="category"
//             onChange={handleChange}
//             required
//             readOnly={!editMode}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             type="text"
//             id="description"
//             placeholder="Brief description of the course"
//             name="description"
//             onChange={handleChange}
//             readOnly={!editMode}
//           />
//         </div>

//         <div className="form-group">
//           <label>How will you conduct your lessons?</label>
//           <br />
//           <div className="radio-group">
//             <label htmlFor="online">Online</label>
//             <input
//               type="radio"
//               id="online"
//               name="course_type"
//               value="online"
//               defaultChecked
//               onChange={handleCourseTypeChoice}
//               readOnly={!editMode}
//             />

//             <label htmlFor="physical">Physical</label>
//             <input
//               type="radio"
//               id="physical"
//               name="course_type"
//               value="physical"
//               onChange={handleCourseTypeChoice}
//               readOnly={!editMode}
//             />

//             <label htmlFor="both">Both</label>
//             <input
//               type="radio"
//               id="both"
//               name="course_type"
//               value="both"
//               onChange={handleCourseTypeChoice}
//               readOnly={!editMode}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="duration">Duration</label>
//           <input
//             type="number"
//             id="duration"
//             placeholder="Duration in minutes"
//             name="duration"
//             onChange={handleChange}
//             required
//             readOnly={!editMode}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="fee">Fee</label>
//           <input
//             type="number"
//             id="fee"
//             placeholder="Fee in $"
//             name="fee"
//             onChange={handleChange}
//             required
//             readOnly={!editMode}
//           />
//         </div>
//         <div className="button-group">
//           <button type="submit" className="sign-in">
//             SUBMIT
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }
