import { useNavigate } from "react-router-dom"

export default function Home() {
  const NavigateTo = useNavigate()

  const BookCourses = () => {
    NavigateTo("/courses")
  }
  return (
    <>
      <div className="row-md-12 home-div1">
        <div className="col-md-5 home-div1-left">
          <h1>Find and book private tutoring sessions effortlessly</h1>
          <button onClick={BookCourses}>Book Now</button>
        </div>
        {/* <div className="col-md-7 home-div1-right">
          <img
            className="home-img"
            src="src/assets/images/home.png"
            alt="TutorPlan"
          ></img>
        </div> */}
      </div>
      <div className="row-md-12 home-div2">
        <button onClick={BookCourses}>Explore Courses</button>
      </div>
    </>
  )
}
