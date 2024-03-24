import {  MdOutlineDesk, MdOutlineDirectionsRun, MdOutlineEditCalendar, MdOutlinePushPin, MdOutlineSchedule } from "react-icons/md";

export const features = [
    {
      id: "feature-1",
      icon: MdOutlineEditCalendar,
      img: "/calendar.JPG",
      // img: "src/assets/images/calendar.JPG",
      title: "Customisable Calendar",
      content:
        " As a tutor you can conveniently set available slots in one click.",
    },
     {
      id: "feature-2",
      icon: MdOutlineSchedule,
      img: "/easySchedule.JPG",
      title: "Easy Scheduling",
      content:
        "Book and Schedule Sessions in a single click!",
    },
    {
      id: "feature-3",
      icon: MdOutlineDesk,
      img: "/desk.JPG",
      title: "A Desk",
      content:
        "Guess what? you even get a desk! Explore courses, find tutors, view profiles all in one place!",
    },
   
  ];

export const featuredCourses = [
    {
      id: "featured-1",
      icon: MdOutlinePushPin,
      title: "Mathematics",
      searchIndex: "math",
      content:
        "Unlock the magic of numbers and equations, where every problem is a thrilling adventure!",
    },
    {
      id: "featured-2",
      icon: MdOutlinePushPin,
      title: "Programming",
      searchIndex: "Progr",
      content:
        "Dive into the coding realm and let your creativity flow through lines of code. The language of the future awaits!",
    },
    {
      id: "featured-3",
      icon: MdOutlinePushPin,
      title: "Art",
      searchIndex: "art",
      content:
        "Brush up on your skills and bring your imagination to life on the canvas. Let the colors tell your unique story!",
    },
    {
      id: "featured-4",
      icon: MdOutlinePushPin,
      title: "Fitness",
      searchIndex: "fit",
      content:
        "Embark on a fitness journey that's as exciting as a rollercoaster ride! Get ready to break a sweat and have a blast!",
    },
    {
      id: "featured-5",
      icon: MdOutlinePushPin,
      title: "Science",
      searchIndex: "science",
      content:
        "Explore the wonders of the universe and unlock the secrets of the natural world. Science is your passport to discovery!",
    },
  ];


//profiles
  export const teamMembers = [
    {
      name: "Patience Otuke",
      title: "UI/UX & Frontend",
      image: "profile-patience.png",
      github: "https://github.com/pesho2k",
      linkedin: "https://www.linkedin.com/in/patienceotuke/",
    },
    { name: "Salau Isiaka", 
    title: "Backend", image: "profile-isiaka.png", 
    github: "https://github.com/olakunle64", 
    linkedin:"https://www.linkedin.com/in/salauolakunle"
  },
    {
      name: "Koffi Noumonvi",
      title: "Frontend & Lead",
      image: "profile-koffi.png",
      github: "https://github.com/bravemaster3/",
      linkedin: "https://www.linkedin.com/in/koffi-dodji-noumonvi-8a578a89/"
    },
  ]