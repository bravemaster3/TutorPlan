import React from "react"
import { featuredCourses } from "src/constants"
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const FeaturedCourses = () => {
  return (
    <>
      {/* <section className="featured-courses"> */}
      <h2 className="courses-title">Featured Courses</h2>
      <ul className="courses-list">
        {featuredCourses.map((feature) => (
          <li key={feature.id} className="hover-group course-item">
            {React.createElement(feature.icon, {
              className: "course-icon-feat",
            })}

            <h3 className="course-title-feat">{feature.title}</h3>
            <p className="course-content-feat">{feature.content}</p>
            <Link
              to={`/courses?search=${feature.searchIndex}`}
              className="hover-group course-link"
            >
              <span className="link-text">View</span>
              <MdOutlineKeyboardArrowRight className="link-icon" />
            </Link>
          </li>
        ))}
      </ul>
      {/* </section> */}
    </>
  )
}

export default FeaturedCourses
