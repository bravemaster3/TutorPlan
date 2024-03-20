import React from "react";
import { courseTutorData } from "../../constants";
import { AiOutlineUser } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";
import CourseCard2 from "../Primitives/CourseCard2";

const UserCourses = () => {
  const numberCourses = courseTutorData.length
  const tutor = false
  return (
    <div>
      <h2 className="text-3xl text-center mx-auto dark:text-slate-200">
        You are {tutor ? "teaching" : "taking"}  {numberCourses} course{numberCourses === 1 ? "" : "s"}
      </h2>
      <div className="flex flex-wrap gap-2 bg-sky-800  mx-auto max-w-4xl">
        {courseTutorData.map((course) => (
          /*   <CoursesCard key={course.id} {...course} /> */
          <CourseCard2 key={course.id} {...course} browser={false} />
        ))}
      </div>
    </div>
  );
};

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
