import { useNavigate } from "react-router-dom"

export default function Home() {
  const NavigateTo = useNavigate()

  const becomeTutor = () => {
    NavigateTo("/courses")
  }

  const exploreCourses = () => {
    NavigateTo("/login/sign-up")
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
        {/* <div className="col-md-7 home-div1-right">
          <img
            className="home-img"
            src="src/assets/images/home.png"
            alt="TutorPlan"
          ></img>
        </div> */}
      </div>
      <div className="row-md-12 home-div2">
        <button onClick={exploreCourses}>Explore Courses</button>
      </div>
    </>
  )
}
