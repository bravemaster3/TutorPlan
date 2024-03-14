import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";

const CourseCard = ({ title, fee, description, course_type, tutor }) => {
	const isOnline = course_type === "online";
	const isBoth = course_type === "both";
	return (
		<div className="group course-card bg-glass-gradient w-[280px] h-[412px] shadow-md rounded-2xl p-5 flex-col items-center justify-center gap-y-[200px] m-auto  ">
			<div className="flex justify-between  gap-2 items-center  h-16 group-hover:text-slate-100 ">
				<h2 className="text-[20px]  font-bold line-clamp-2 overflow-hidden  ">
					{title}
				</h2>
				<h1
					className=" font-bold text-[32px]
				 text-blue-500"
				>
					${fee}
				</h1>
			</div>

			<p className="group-hover:text-slate-100 overflow-auto h-[170px] border border-slate-600 rounded-lg self-stretch px-3 py-2 my-3">
				{description}
			</p>

			<div className="group-hover:text-slate-100 flex gap-4 items-center  self-stretch">
				<AiOutlineUser
					size={64}
					className="w-16 h-16 rounded-full border border-slate-700"
				/>
				<div className="group-hover:text-slate-100">
					<p className="group-hover:text-slate-100 text-slate-600 font-medium">
						{tutor.first_name} {tutor.last_name}
					</p>
					<strong>
						{tutor.city}, {tutor.country}
					</strong>
				</div>
			</div>
			<div className="group-hover:text-slate-100 flex justify-between my-3">
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
