import { useNavigate } from "react-router-dom"

export default function Home() {
  const NavigateTo = useNavigate()

  const BookCourses = () => {
    NavigateTo("/courses")
  }
  return (
    <>
      <div className="home-div1">
        <div className="home-div1-left">
          <h1>Find and book private tutoring sessions effortlessly</h1>
          <button onClick={BookCourses}>Book Now</button>
        </div>
        <div className="home-div1-right">
          <img
            className="home-img"
            src="src/assets/images/home.png"
            alt="TutorPlan"
          ></img>
        </div>
      </div>
      <div className="home-div2">Page 2</div>
    </>
  )
}
