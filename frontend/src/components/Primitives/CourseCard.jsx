import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";

const CourseCard = ({ title, fee, description, course_type, duration, tutor }) => {
	const isOnline = course_type === "online";
	const isBoth = course_type === "both";
	return (
		<div className="group course-card  bg-black-gradient dark:text-slate-300 w-[250px] shadow-md rounded-2xl px-4  gap-y-8 m-auto py-4">{/* flex flex-col items-center justify-center */}
			<div className=" py-2 flex justify-between   gap-1 items-center h-10 group-hover:text-slate-100 ">
				<h2 className=" text-lg leading-tight font-roboto font-bold line-clamp-2 overflow-hidden  ">
					{title}
				</h2>
				<h1
					className=" font-roboto font-bold text-3xl
				 text-blue-500"
				>
					${fee}
				</h1>

			</div>
			<p className="font-worksans font-light my-3 text-base "> <span className="font-medium">Duration: </span>{duration}  mins</p>

			<p className=" font-worksans  group-hover:text-slate-100 overflow-auto h-28 border text-sm border-slate-600 rounded-lg self-stretch px-3 py-2 my-3">
				{description}
			</p>

			<div className="  font-worksans group-hover:text-slate-100 flex gap-4 items-center  self-stretch">
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
			</div>
			<div className=" font-worksans group-hover:text-slate-100 flex justify-between mt-3">
				{(isOnline || isBoth) && (
					<p className="group-hover:text-slate-100 flex justify-center py-0 px-2 items-center place-content-center gap-2 border border-blue-800 rounded-[32px]">
						{" "}
						<RiCircleFill className="text-teal-500" />{" "}
						<span>Online</span>
					</p>
				)}
				{(!isOnline || isBoth) && (
					<p className=" group-hover:text-slate-100 flex justify-center py-0 px-2 items-center place-content-center gap-2 border border-blue-800 rounded-[32px]">
						<RiCircleFill className="text-orange-500" />
						Physical
					</p>
				)}
			</div>
		</div>
	);
};

export default CourseCard;
