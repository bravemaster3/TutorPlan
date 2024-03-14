import React from 'react'
import { footerLinks } from '../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className=' text-slate-900 text-lg pt-6 pb-8'>
      <section className='max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between'>

        {footerLinks.map((footerSection, index) => (
          <ul key={index}>
            <span className='font-poppins font-bold '>{footerSection.title}</span>
            {footerSection.links.map((nav, index) => (
              <li key={index}>
                <Link to={nav.link} className='text-[16px] hover:text-green-500 focus:text-green-600'>{nav.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </section>
      {/*       <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
