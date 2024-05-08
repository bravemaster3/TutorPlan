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
/* import AddCourse from "./AddCourse"; */
import { GenerateComponents, Modal } from "../Primitives";
import useAuth from '../../hooks/useAuth';
import axios, { getCourses } from '../../apiConfig'
import AddCourse from './AltAddCourse'
import useFormContext from "../../hooks/useFormContext";
import useSWR from 'swr'
import SkeletonCourse from "../Skeletons/SkeletonCourse";
import { useNavigate } from "react-router-dom";
import CalendarModal from "./CourseCalendar";



const UserCourses = () => {

  const navigateTo = useNavigate();
  const { auth, isTutor } = useAuth();
  const cacheKey = `/${auth.roles}s/${auth.userData.id}/courses`
  const { editMode, setEditMode } = useFormContext();
  const localizer = momentLocalizer(moment)
  const [numberCourses, setnumberCourses] = useState(0)

  const [coursesData, setcoursesData] = useState([])

  //const isTutor = (auth.roles === 'tutor')
  const [modal, setmodal] = useState(true)
  const { isLoading,
    error,
    data: coursesDataAPI,
    mutate, } = useSWR(cacheKey, ()=>getCourses(`${auth.roles}s`, auth.userData.id, auth.userData, isTutor))

  
  let content;

  if (isLoading) {
    content = (
      [...Array(4).keys()].map(i => {
        return <SkeletonCourse browser={false} key={i} />
      })
    )
  }
  else if (error) {
    console.log(error)
    content = <p>Courses could not be loaded</p>
  }
  else {
    
    content = <GenerateComponents componentType={CourseCard2} data={coursesDataAPI} />
    
  }
 
  useEffect(() => {
    setnumberCourses(coursesDataAPI?.length)
  }, [coursesDataAPI])

  console.log("rendering usercourses")

  
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (isTutor) {
      setModalOpen(true);
      setEditMode(true)
    }else{
      navigateTo("/courses")
      
    }
    
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditMode(false)
  };

  return (
    <>
      <h2 className="text-3xl text-center my-11 dark:text-slate-200">
        {isLoading ? 'Loading your ' : `You are ${isTutor ? "teaching " : "taking "}`}
          {numberCourses} Course{numberCourses === 1 ? "" : "s"}

      </h2>


      <section className='flex flex-wrap w-full justify-evenly items-center gap-3  my-4  py-1'>
        {content}
 <div className="w-[360px]">
          <button className=" m-auto rounded-full bg-zinc-700 w-20 h-20  flex items-center justify-center text-slate-200" onClick={openModal}>

            <MdOutlineAdd size={30} className=" w-full h-full p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
          </button>
        </div>
      
      </section>
      <Modal isOpen={modalOpen} onClose={closeModal} children={<AddCourse />} />
      





    </>
  );
};


export default UserCourses;
