// import React from "react"
// import { Container, Row, Col, Image } from "react-bootstrap"
// import { teamMembers } from "src/constants"
// import { FaGithub, FaLinkedin } from "react-icons/fa"

// export default function About() {
//   return (
//     <Container fluid style={{ padding: "20px 10% 20px 10%" }}>
//       <Row>
//         <Col>
//           <h1>About Us</h1>
//           <p>
//             We started our journey in 2020 with a mission to provide the best
//             service in the industry. Our team is dedicated and passionate about
//             the work we do. We strive to exceed our clients' expectations and
//             deliver exceptional results.
//           </p>
//         </Col>
//       </Row>
//       <Row className="d-flex justify-content-center text-center">
//         {teamMembers.map((member, index) => (
//           <Col key={index} xs={12} md={4}>
//             <Image
//               style={{
//                 backgroundColor: "#f2f9ea",
//                 border: "2px solid #31ff38",
//                 boxShadow: "0px 7px 29px rgba(49, 255, 56, 0.2)",
//               }}
//               src={member.image}
//               roundedCircle
//             />
//             <h2>{member.name}</h2>
//             <p>{member.title}</p>
//             <div>
//               <a href={member.github} target="_blank" rel="noopener noreferrer">
//                 <FaGithub
//                   style={{
//                     height: "2rem",
//                     marginRight: "30px",
//                     color: "black",
//                   }}
//                 />
//               </a>
//               <a
//                 href={member.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin style={{ height: "2rem", color: "#0077b5" }} />
//               </a>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   )
// }

// import React from "react"
// import { Container, Row, Col, Image } from "react-bootstrap"
// import { teamMembers } from "src/constants"
// import { FaGithub, FaLinkedin } from "react-icons/fa"

// export default function About() {
//   return (
//     <Container fluid style={{ padding: "20px 10% 20px 10%" }}>
//       <Row>
//         <Col>
//           <h1>About Us</h1>
//           <p>
//             Founded in 2024, TutorPlan was inspired by a team member's
//             frustration with scheduling piano lessons. We recognized a common
//             problem: the inefficiency of coordinating tutoring sessions through
//             text messages. TutorPlan simplifies scheduling for tutors and
//             students alike. Our platform offers intuitive booking, automatic
//             reminders, and built-in messaging. We're dedicated to enhancing the
//             tutoring experience by providing tools for effective communication
//             and organization. At TutorPlan, we believe in continuous
//             improvement. We value user feedback and strive to implement updates
//             that meet the evolving needs of our community. Join us in our
//             mission to transform tutoring. With TutorPlan, scheduling sessions
//             is stress-free, allowing tutors and students to focus on learning
//             and growth.
//           </p>
//         </Col>
//       </Row>
// <Row className="d-flex justify-content-center text-center">
//   {teamMembers.map((member, index) => (
//     <Col key={index} xs={12} md={4}>
//       <div className="about-us-card">
//         <Image
//           style={{
//             backgroundColor: "#f2f9ea",
//             border: "2px solid #31ff38",
//             boxShadow: "0px 7px 29px rgba(49, 255, 56, 0.2)",
//           }}
//           src={member.image}
//           roundedCircle
//         />
//         <h2>{member.name}</h2>
//         <p>{member.title}</p>
//         <div>
//           <a
//             href={member.github}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub
//               style={{
//                 height: "2rem",
//                 marginRight: "30px",
//                 color: "black",
//               }}
//             />
//           </a>
//           <a
//             href={member.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin style={{ height: "2rem", color: "#0077b5" }} />
//           </a>
//         </div>
//       </div>
//     </Col>
//   ))}
// </Row>
//     </Container>
//   )
// }
import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { teamMembers } from "src/constants"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function About() {
  return (
    <Container fluid className="about-container">
      {/* Origin Section */}
      <Row className="about-section">
        <Col>
          <h2>Origin</h2>
          <p>
            Founded in 2024, TutorPlan was inspired by a team member's
            frustration with scheduling piano lessons. We recognized a common
            problem: the inefficiency of coordinating tutoring sessions through
            text messages.
          </p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="about-section">
        <Col>
          <h2>Mission</h2>
          <p>
            TutorPlan simplifies scheduling for tutors and students alike. Our
            platform offers intuitive booking, automatic reminders, and built-in
            messaging. We're dedicated to enhancing the tutoring experience by
            providing tools for effective communication and organization.
          </p>
        </Col>
      </Row>

      {/* Commitment Section */}
      <Row className="about-section">
        <Col>
          <h2>Commitment</h2>
          <p>
            At TutorPlan, we believe in continuous improvement. We value user
            feedback and strive to implement updates that meet the evolving
            needs of our community. Join us in our mission to transform
            tutoring. With TutorPlan, scheduling sessions is stress-free,
            allowing tutors and students to focus on learning and growth.
          </p>
        </Col>
      </Row>

      {/* Team Members Section */}
      <Row className="d-flex justify-content-center text-center">
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} md={4}>
            <div className="about-us-card">
              <Image
                style={{
                  backgroundColor: "#f2f9ea",
                  border: "2px solid #31ff38",
                  boxShadow: "0px 7px 29px rgba(49, 255, 56, 0.2)",
                }}
                src={member.image}
                roundedCircle
              />
              <h2>{member.name}</h2>
              <p>{member.title}</p>
              <div>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    style={{
                      height: "2rem",
                      marginRight: "30px",
                      color: "black",
                    }}
                  />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ height: "2rem", color: "#0077b5" }} />
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
