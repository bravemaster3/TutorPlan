import { useNavigate } from "react-router-dom"
import FeaturedCourses from "src/components/homeComponents/FeaturedCourses"
import Features from "src/components/homeComponents/Features"
import { featuredCourses } from "src/constants"
import { features } from "src/constants"

export default function Home() {
  const NavigateTo = useNavigate()

  const becomeTutor = () => {
    NavigateTo("/login/sign-up")
  }

  const exploreCourses = () => {
    NavigateTo("/courses")
  }
  return (
    <>
      <div className="row-md-12 home-div1">
        <div className="col-md-5 home-div1-left">
          <h1>Find and book private tutoring sessions effortlessly</h1>
          <div className="home-inline-btn">
            <button className="home-btn-tutor" onClick={becomeTutor}>
              Become a tutor
            </button>
            <button onClick={exploreCourses}>Explore courses</button>
          </div>
        </div>
      </div>
      <div className="row-md-12 home-div2">
        <button onClick={exploreCourses}>Explore Courses</button>
      </div>
      <div className="row-md-12">
        <Features />
      </div>
      <div className="row-md-12 featured-courses-div">
        <FeaturedCourses />
      </div>
    </>
  )
}
