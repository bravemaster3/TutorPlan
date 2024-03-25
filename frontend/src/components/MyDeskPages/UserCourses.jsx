import React, { useEffect } from "react";
// import { coursesData } from "../../constants";
import { AiFillCloseCircle, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";
import CourseCard2 from "../Primitives/CourseCard2";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdOutlineAdd, MdOutlineClose } from "react-icons/md";
import AddCourse from "./AddCourse";
import { Modal } from "../Primitives";
import useAuth from '../../hooks/useAuth';
import axios from '../../apiConfig'

const UserCourses = () => {
  const { auth } = useAuth();
  const localizer = momentLocalizer(moment)
  const [numberCourses, setnumberCourses] = useState(0)

  const [coursesData, setcoursesData] = useState([])

  const isTutor = (auth.roles === 'tutor')
  const [modal, setmodal] = useState(true)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const COURSES_URL = `/${auth.roles}s/${auth.userData.id}/courses`

        const response = await axios.get(COURSES_URL);
        console.log(JSON.stringify(response.data))


        // setcoursesData(Object.values(response.data));
        // setcoursesData(Object.values(response.data));

        const tutorPromises = response.data.map(async (course) => {
          const TUTOR_URL = `/tutors/${course.tutor_id}`;
          const tutorResponse = await axios.get(TUTOR_URL);
          console.log(tutorResponse.data)
          return { ...course, tutor: tutorResponse.data };
        });

        const coursesWithTutors = await Promise.all(tutorPromises);
        console.log(coursesWithTutors);
        setcoursesData(coursesWithTutors);


        /* const coursesWithTutor = await Promise.all(
          response.data.map(async (course) => {
            const tutorResponse = await axios.get(
              `/tutors/${course.tutor_id}`
            );
            console.log(tutorResponse.data)
            return { ...course, tutor: tutorResponse.data };
          })
        );
        console.log(coursesWithTutor); */



      } catch (error) {
        console.log(error)

      }
    }
    fetchCourses();

  }, [])
  useEffect(() => {


    setnumberCourses(coursesData.length)
  }, [coursesData])


  const CalendarModal2 = () => {
    return (

      <article className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" hidden={!modal}>
        <h2 className="ml-0 text-9xl">here</h2>
        {/*  <!--
          Background backdrop, show/hide based on modal state.

          Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
          Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
  --> */}
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <h2 className="ml-0 text-9xl uppercase">here</h2>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <h2 className="text-9xl uppercase">here</h2>

          <div class="flex min-h-full items-end justify-center p-4 bg-green-500 text-center sm:items-center sm:p-0" onClick={() => { setmodal(!modal) }}>

            {/*  <!--
              Modal panel, show/hide based on modal state.

              Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </article>



    )
  }
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  /*   const Modal = ({ isOpen, onClose }) => {
      const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  
      return (
        <>
          {isOpen && (
            <dialog open onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2></h2>
  
                <div className="mb-4">
                  <button className="absolute top-6 right-6 p-2 w-fit" onClick={onClose}>
  
                    <MdOutlineClose size={30} className="text-gray-500 w-8 h-8 p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
                  </button>
  
                </div>
  
                <div className="h-[460px] p-10">
                  <Calendar
                    localizer={localizer} />
  
                </div>
                <button className="bg-emerald-500 text-white px-4 py-2 h-11 min-w-fit mx-auto rounded hover:bg-emerald-600">Book</button>
  
  
              </div>
  
            </dialog>
          )}
          {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" />}
        </>
      );
    }; */
  return (
    <div>
      <h2 className="text-3xl text-center mx-auto dark:text-slate-200">
        You are {isTutor ? "teaching" : "taking"}  {numberCourses} course{numberCourses === 1 ? "" : "s"}

      </h2>

      <section className="grid grid-cols-3 items-center gap-4   mx-auto p-28 ">

        {coursesData.map((course) => (
          /*   <CoursesCard key={course.id} {...course} /> */
          <CourseCard2 key={course.id} {...course} browser={false} /> /* onClick = {() => {setmodal(true)}}  */
        ))}

        <button className="rounded-full bg-zinc-700 w-20 h-20 mx-auto flex items-center justify-center text-slate-200" onClick={openModal}>

          <MdOutlineAdd size={30} className=" w-full h-full p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
        </button>

      </section>

      <Modal isOpen={modalOpen} onClose={closeModal} children={<AddCourse />} />





    </div>
  );
};






/* export default CalendarModal */








const CoursesCard = ({
  id,
  title,
  fee,
  course_type,
  duration,
  description,
  tutor,
}) => {
  const isOnline = course_type === "online";
  const isBoth = course_type === "both";
  return (
    <article
      key={id}
      className="group course-card  bg-gray-800 dark:text-slate-300 w-[360px] min-h-52 max-h-60 gap-2 shadow-md rounded-2xl flex items-start justify-between  m-auto py-4 px-4 "
    >
      <section
        id="course-title"
        className="  w-[150px] h-[161px] flex  flex-col gap-1 justify-between m-auto bg-purple-600 "
      >
        <div className=" py-2 flex flex-col justify-between gap-4 items-center w-full  group-hover:text-slate-100  ">
          <h2 className=" text-lg leading-tight font-roboto font-bold line-clamp-2 text-center overflow-hidden  ">
            {title}
          </h2>
          <h1
            className=" font-roboto font-bold text-3xl
				 text-blue-500"
          >
            ${fee}
          </h1>
        </div>
        {/* <div className="  font-worksans group-hover:text-slate-100 flex flex-col gap-1 items-center  self-stretch">
          <AiOutlineUser
            size={32}
            className="w-11 h-11  rounded-full border border-slate-700"
          />
          <div className="text-center group-hover:text-slate-100">
            <p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
              {tutor.first_name} {tutor.last_name}
            </p>
            <p className="font-semibold text-xs">
              {tutor.city}, {tutor.country}
            </p>
          </div>
        </div> */}

        <div className=" font-worksans group-hover:text-slate-100 flex  flex-col  gap-1">
          {(isOnline || isBoth) && (
            <p className="group-hover:text-slate-100 flex justify-start py-0 px-1 items-center gap-2 max-w-20 border border-blue-800 rounded-full ">
              <RiCircleFill className="text-teal-500" />
              <span className="text-[0.5rem]"> Online</span>
            </p>
          )}
          {(!isOnline || isBoth) && (
            <p className=" group-hover:text-slate-100 flex justify-start py-0 px-1  max-w-20 items-center place-content-center gap-2 border border-blue-800 rounded-[32px]">
              <RiCircleFill className="text-orange-500" />
              <span className="text-[0.5rem] ">In Person</span>

            </p>
          )}
        </div>

      </section>
      <section className=" w-[210px]  m-auto flex flex-col justify-center gap-1">
        <div className="  font-worksans group-hover:text-slate-100 flex flex-col gap-1 items-center  self-stretch">
          <AiOutlineUser
            size={32}
            className="w-11 h-11  rounded-full border border-slate-700"
          />
          <div className="text-center group-hover:text-slate-100">
            <p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
              {tutor.first_name} {tutor.last_name}
            </p>
            <p className="font-semibold text-xs">
              {tutor.city}, {tutor.country}
            </p>
          </div>
        </div>
        {/*  <p className=" font-worksans  group-hover:text-slate-100 overflow-auto h-28 border text-sm border-slate-600 rounded-lg self-stretch px-3 py-2">
          {description}
        </p> */}
        <p className="font-worksans font-light my-3 mx-auto text-sm ">
          {" "}
          <span className="font-medium">Duration: </span>
          {duration} mins
        </p>
        {/* <div className=" font-worksans group-hover:text-slate-100 flex mt-3 gap-1">
          {(isOnline || isBoth) && (
            <p className="group-hover:text-slate-100 flex justify-start py-0 px-2 items-center w-fit place-content-center gap-2 border border-blue-800 rounded-full">
              <RiCircleFill className="text-teal-500" />
              Online
            </p>
          )}
          {(!isOnline || isBoth) && (
            <p className=" group-hover:text-slate-100 flex justify-center py-0 px-2 w-fit items-center place-content-center gap-2 border border-blue-800 rounded-[32px]">
              <RiCircleFill className="text-orange-500" />
              Physical
            </p>
          )}
        </div> */}
      </section>

      {/* <div className="  font-worksans group-hover:text-slate-100 flex gap-4 items-center  self-stretch">
        <AiOutlineUser
          size={56}
          className="w-14 h-14 w- rounded-full border border-slate-700"
        />
        <div className="group-hover:text-slate-100">
          <p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
            {tutor.first_name} {tutor.last_name}
          </p>
          <p className="font-semibold text-xs">
            {tutor.city}, {tutor.country}
          </p>
        </div>
      </div> */}
    </article>
  );
};

export default UserCourses;
