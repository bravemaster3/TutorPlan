import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineUser } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";


const About = () => {
  const teamMembers = [
    {
      firstName: 'Koffi',
      lastName: 'Dodji',
      roles: 'Frontend Developer',
      socials: {
        github: 'https://github.com/bravemaster3',
        linkedin: 'https://www.linkedin.com/in/koffi-dodji-noumonvi-8a578a89',
        // Add any other socials as needed
      }
    },
    {
      firstName: 'Patience',
      lastName: 'Otuke',
      roles: 'UI/UX Designer, Frontend Developer',
      socials: {
        github: 'https://github.com/PeshO2K',
        linkedin: 'https://www.linkedin.com/in/patienceotuke',
        // Add any other socials as needed
      }
    },
    {
      firstName: 'Isaiq',
      lastName: 'Salau',
      roles: 'Backend Developer',
      socials: {
        github: 'https://github.com/Olakunle64',
        linkedin: 'https://www.linkedin.com/in/salauolakunle',
        // Add any other socials as needed
      }
    }
  ];
  return (
    <main className='flex flex-col gap-8 py-4'>
      <section id='story'>
        <h2 className='dark:text-slate-200 text-2xl mb-6'>Our Story</h2>
        <p className='dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quo voluptate maiores? Soluta delectus magnam vero ducimus, suscipit nobis, corrupti quos accusantium impedit saepe incidunt, quia debitis quas non at.
          Nihil, accusamus saepe. Veniam voluptatem culpa alias dolorem quasi odit quis rerum magni ipsa laborum id recusandae, ipsum enim velit itaque asperiores cumque provident explicabo dolore placeat. Aliquam, ipsum aperiam.
          Saepe excepturi explicabo enim, repudiandae, veritatis ipsam impedit necessitatibus assumenda dolores provident quod optio nostrum! Laboriosam distinctio harum, aut, illo in quos possimus vero veritatis ullam beatae, minima tempora nam.
          Atque nisi maiores possimus minima expedita saepe quae consectetur aperiam iste doloribus itaque voluptates obcaecati unde cupiditate nesciunt, quaerat culpa! Libero obcaecati quo debitis sit aliquam quas, veniam soluta eaque!
          Debitis, porro, officiis nulla non eligendi quisquam laborum, id maxime provident ad sapiente voluptate deleniti! Dolorum, soluta, porro officiis quae expedita repellendus earum alias quas, in repudiandae hic dolores commodi.</p>
      </section>
      <section id='team'>
        <h2 className='dark:text-slate-200 text-2xl  mb-8'>The Team</h2>
        <div className='flex gap-4 pb-4 justify-evenly'>
          {teamMembers.map((member, index) => (
            <article key={index} className='flex flex-col  items-center dark:text-slate-200'>
              <AiOutlineUser
                size={56}
                className="w-14 h-14  rounded-full border border-slate-700"
              />
              <p>{member.firstName} {member.lastName}</p>
              <p>{member.roles}</p>

              <p className='flex items-center gap-3 my-1 cursor-pointer'>
                {member.socials.github && <AiOutlineGithub size={21} onClick={() => window.open(member.socials.github)} />}
                {member.socials.linkedin && <AiFillLinkedin size={21} onClick={() => window.open(member.socials.linkedin)} />}
                {member.socials.X && <RiTwitterXLine size={21} onClick={() => window.open(member.socials.X)} />}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
