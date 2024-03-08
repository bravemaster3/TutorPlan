import { useNavigate } from "react-router-dom"
import styles from "../style"
/* import "./Home.css" */

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
    
    


    </>

  )
}


{/* <div className="row-md-12 home-div1">
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
      <section class="hero">
        <h2 class="hero__h2">Bienvenidos!</h2>
        <figure>
            <img src="src/assets/images/google.png" alt="Tacos and a Drink" title="We love tacos!" width="1200"
                height="700"/>
            <figcaption class="offscreen">
                Tacos and a Drink
            </figcaption>
        </figure>
    </section> */}
