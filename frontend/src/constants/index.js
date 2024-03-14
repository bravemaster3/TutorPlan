import {  MdOutlineDesk, MdOutlineDirectionsRun, MdOutlineEditCalendar, MdOutlinePushPin, MdOutlineSchedule } from "react-icons/md";
import {  facebook, instagram, linkedin, twitter  } from "../assets";

export const navLinks = [
     {
    id: "home",
    title: "Home",
    to: "/"
  },
 
   {
    id: "courses",
    title: "Courses",
    to: "/Courses"
  },
   {
    id: "my-desk",
    title: "My Desk",
    to: "/courses"
  },
  {
    id: "about",
    title: "About Us",
    to: "/courses"
  },
  {
    id: "login",
    title: "SIGN IN/UP",
    to: "/login/*"
  },

];
export const heroContent={
  subtitle: "AN INTUITIVE BOOKING PLATFORM",
  title: "Private Tutoring At Your Convenience.",
  description: 'Find and book private tutoring sessions with ease.'
}
export const heroButtons=[
 {
  id: 'btn_become_tutor',
  className: 'px-3 py-1 rounded-lg text-white bg-blue-600 border border-2 border-blue-600 hover:bg-blue-700',
  label: 'Become a Tutor',

}
,
 {
  id: 'btn_explore_courses',
  className: 'px-3 py-1 rounded-lg text-slate-800 font-semibold  border border-2 border-green-500 hover:bg-green-700',
  label: 'Explore Courses',

}
]
export const features = [
  {
    id: "feature-1",
    icon: MdOutlineEditCalendar,
    title: "Customisable Calendar",
    content:
      " As a tutor you can conveniently block off times in your calendar by simply dragging.",
  },
   {
    id: "feature-2",
    icon: MdOutlineSchedule,
    title: "Easy Scheduling",
    content:
      "Book and Schedule Sessions in 2 clicks!",
  },
  {
    id: "feature-3",
    icon: MdOutlineDesk,
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
    content:
      "Unlock the magic of numbers and equations, where every problem is a thrilling adventure!",
  },
  {
    id: "featured-2",
    icon: MdOutlinePushPin,
    title: "Programming",
    content:
      "Dive into the coding realm and let your creativity flow through lines of code. The language of the future awaits!",
  },
  {
    id: "featured-3",
    icon: MdOutlinePushPin,
    title: "Art",
    content:
      "Brush up on your skills and bring your imagination to life on the canvas. Let the colors tell your unique story!",
  },
  {
    id: "featured-4",
    icon: MdOutlinePushPin,
    title: "Fitness",
    content:
      "Embark on a fitness journey that's as exciting as a rollercoaster ride! Get ready to break a sweat and have a blast!",
  },
  {
    id: "featured-5",
    icon: MdOutlinePushPin,
    title: "Science",
    content:
      "Explore the wonders of the universe and unlock the secrets of the natural world. Science is your passport to discovery!",
  },
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];



//Test Data
export const buttonData = [
  {
    id: 'btn_1',
    className: 'flex justify-between items-center gap-4 m-3 p-4 border border-white rounded-sm text-white',
    label: 'Click me1!',
    leftIcon: {
      className: 'w-[32] h-[32]',
      src: '/src/assets/react.svg',
    },
    rightIcon: {
      className: 'w-[32] h-[32]',
      src: '/src/assets/react.svg',
    },
  },
  {
    id: 'btn_2',
    className: 'flex justify-between items-center gap-4 m-3 p-4 border border-white rounded-sm text-white',
    label: 'Click me2!',
    leftIcon: {
      className: 'w-[32] h-[32]',
      src: '/src/assets/react.svg',
    },
    rightIcon: {
      className: 'w-[32] h-[32]',
      src: '/src/assets/react.svg',
    },
  },
  // Add more button data as needed
];

 // Example data for InputFields
export const inputFieldData = [
  {
    label: 'Username',
    id: 'username',
    type: 'text',
    placeholder: 'Enter your username',
    value: '',
    name: 'username',
    defaultChecked: false,
  },
  {
    label: 'New Username',
    id: 'username2',
    type: 'text',
    placeholder: 'Enter your username',
    value: '',
    name: 'username',
    defaultChecked: false,
  },
  // Add more input field data as needed
];

export const sampleFormData = {
  formClasses: 'flex-col w-96  border place-items-center bg-slate-400 p-8 rounded-md m-auto gap-8',
  title: {
    className: 'text-2xl font-bold text-center mb-4',
    label: 'Sign Up Form',
  },
  subtitle: {
    className: 'text-center text-sm mb-4',
    label: 'Please fill in the required information.',
  },
  formFields: [
    {
      label: {label:'Username', className:"font-bold text-xl "},
      id: 'username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      label: {label:'Email', className:"font-bold text-xl "},
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    // Add more form fields as needed
  ],
  radioGroup: {
    className: 'mb-4 place-items-center font-bold text-xl',
    label: 'Select your gender',
    optionsClassName: 'flex   place-items-center  font-light ',
    options: [
      {
        label:  {label:'Male', className:" text-xl "},
        id: 'gender-male',
        type: 'radio',
        name: 'gender',
      },
      {
        label:  {label:'Female', className:"text-xl "},
        id: 'gender-female',
        type: 'radio',
        name: 'gender',
      },
    ],
  },
  formButton: {
    id: 'submit-btn',
    className: 'bg-blue-500 text-center w-full text-white px-4 py-2 rounded-md',
    label: 'Default Form Submit',
  },
  buttonGroup: {
    className: ' w-full flex-col  gap-14 justify-start my-2 ',
    separator: {
      className: 'text-white uppercase text-center font-bold text-lg mb-2',
      label: 'or',
    },
    buttons: [
      {
        id: 'google-btn',
        className: 'flex w-full place-content-center gap-4 m-auto border border-white rounded-sm text-white bg-blue-500  px-4 py-2 rounded-md mb-6',

        label: 'Sign Up with Google',
      },
      {
        id: 'facebook-btn',
        className: "flex place-content-center w-full gap-4 px-2 py-2 border border-white rounded-md text-center text-white bg-red-500 ",

        label: 'Sign Up with Facebook',
        leftIcon: {
      className: 'w-[24] h-[24]',
      src: '/src/assets/react.svg',
    },
      },
    ],
  },
  redirect: {
    className: 'mt-4 text-center',
    label: {
      className: 'text-white',
      label: 'Already have an account?',
    },
    link: {
      to: '/login',
      className: 'text-blue-500',
      label: 'Login here',
    },
  },
};


export const courseData = [

  {
    id: 'course1',
    title: 'Mathematics Course',
    fee: 50,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, architecto aperiam commodi, pariatur iure nisi qui illum enim totam sint obcaecati magnam omnis excepturi voluptate eveniet quidem, corporis laborum harum itaque. Laboriosam dolore itaque molestias commodi ab et eius magni quod earum adipisci illum reiciendis non ipsa iure maiores, ut facere consequatur necessitatibus a corrupti ex aliquam suscipit tempora hic. A repellendus sint aut, cupiditate cumque exercitationem est nobis ipsam numquam nulla corrupti eligendi ratione, architecto veniam provident error optio!',
    course_type: 'online',
    tutor: {
      first_name: 'John',
      last_name: 'Doe',
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 'course2',
    title: 'Programming Course',
    fee: 100,
    description: 'Master programming languages and algorithms.',
    course_type: 'both',
    tutor: {
      first_name: 'Alice',
      last_name: 'Smith',
      city: 'London',
      country: 'UK',
    },
  },
    {
    id: 'course3',
    title: 'History Class',
    fee: 30,
    description: 'Explore the rich history of civilizations.',
    course_type: 'physical',
    tutor: {
      first_name: 'Robert',
      last_name: 'Johnson',
      city: 'Paris',
      country: 'France',
    },
  },
  {
    id: 'course4',
    title: 'Graphic Design Workshop',
    fee: 80,
    description: 'Create stunning visuals with graphic design principles.',
    course_type: 'online',
    tutor: {
      first_name: 'Emily',
      last_name: 'Davis',
      city: 'Berlin',
      country: 'Germany',
    },
  },
  {
    id: 'course5',
    title: 'Language Learning Bootcamp',
    fee: 60,
    description: 'Immerse yourself in language learning with native speakers.',
    course_type: 'both',
    tutor: {
      first_name: 'Juan',
      last_name: 'Gonzalez',
      city: 'Madrid',
      country: 'Spain',
    },
  },
  {
    id: 'course6',
    title: 'Physics Masterclass',
    fee: 90,
    description: 'Dive deep into the world of physics and its applications.',
    course_type: 'online',
    tutor: {
      first_name: 'Elena',
      last_name: 'Rodriguez',
      city: 'Barcelona',
      country: 'Spain',
    },
  },
  {
    id: 'course7',
    title: 'Fitness Training Program',
    fee: 75,
    description: 'Achieve your fitness goals with a personalized training program.',
    course_type: 'physical',
    tutor: {
      first_name: 'Mark',
      last_name: 'Johnson',
      city: 'Los Angeles',
      country: 'USA',
    },
  },
  {
    id: 'course8',
    title: 'Cooking Class: Italian Cuisine',
    fee: 65,
    description: 'Learn to cook delicious Italian dishes from scratch.',
    course_type: 'online',
    tutor: {
      first_name: 'Sophia',
      last_name: 'Rossi',
      city: 'Rome',
      country: 'Italy',
    },
  },
  {
    id: 'course9',
    title: 'Photography Workshop',
    fee: 110,
    description: 'Master the art of photography and composition.',
    course_type: 'both',
    tutor: {
      first_name: 'David',
      last_name: 'Miller',
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 'course10',
    title: 'Digital Marketing Bootcamp',
    fee: 95,
    description: 'Boost your business with effective digital marketing strategies.',
    course_type: 'online',
    tutor: {
      first_name: 'Linda',
      last_name: 'Jones',
      city: 'Sydney',
      country: 'Australia',
    },
  },
  // Add more sample courses as needed

];
