import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";

const CourseCard2 = ({ title, fee, description, course_type, duration, tutor, browser = true }) => {
	const isOnline = course_type === "online";
	const isBoth = course_type === "both";
	/* const browser = true; */
	const userTutor = false; /* context manager */
	return (
		<article className={` group course-card   dark:text-slate-300  shadow-md rounded-2xl m-auto px-4  py-4 ${browser ? ' bg-black-gradient  w-[260px]  ' : 'flex bg-gray-800 w-[360px] min-h-52 max-h-60 gap-2  items-start justify-between '} `}>{/* flex bg-gray-800 w-[360px] min-h-52 max-h-60 gap-2  items-start justify-between */}
			{browser ? (
				<>

					<TitleSection title={title} fee={fee} browser={browser} />

					<DurationSection duration={duration} browser={browser} userTutor={userTutor} />
					<DescriptionSection description={description} browser={browser} />
					<TutorDetailsSection tutor={tutor} browser={browser} />
					<CourseTypeSection isBoth={isBoth} isOnline={isOnline} browser={browser} />
				</>) : (
				<>
					<section
						id="course-title"
						className="  w-[150px] h-[162px] flex  flex-col gap-1 justify-between m-auto  "
					>
						<TitleSection title={title} fee={fee} browser={browser} />
						<CourseTypeSection isBoth={isBoth} isOnline={isOnline} browser={browser} />

					</section>
					<section className=" w-[210px]  m-auto flex flex-col justify-center gap-1 ">
						{userTutor ?
							(<><DescriptionSection description={description} browser={browser} /></>) : (<><TutorDetailsSection tutor={tutor} browser={browser} /></>)}


						<DurationSection duration={duration} browser={browser} userTutor={userTutor} />
					</section>
				</>
			)}
		</article>
	);
};

const TitleSection = ({ title, fee, browser }) => {
	return (
		<div className={` py-2 flex justify-between   items-center  group-hover:text-slate-100 ${browser ? ' gap-1 h-10 ' : ' flex-col gap-4 w-full '} `}>{/* flex-col gap-4 w-full  */}
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
	)
}
const CourseTypeSection = ({ isOnline, isBoth, browser }) => {
	return (
		<div className={` font-worksans group-hover:text-slate-100 flex ${browser ? ' justify-between mt-3 ' : 'flex-col gap-1 '}  `}>
			{(!isOnline || isBoth) && (
				<CourseTypeIcon isOnline={!isOnline} browser={browser} />

			)}
			{(isOnline || isBoth) && (
				<CourseTypeIcon isOnline={isOnline} browser={browser} />
			)}

		</div>

	)
}

const CourseTypeIcon = ({ isOnline, browser }) => {
	return (
		<p className={`group-hover:text-slate-100 flex justify-start py-0  items-center place-content-center ${browser ? 'px-2' : 'max-w-20 px-1'}  gap-2 border border-blue-800 rounded-[32px]`}>
			<RiCircleFill className={`${isOnline ? 'text-teal-500' : 'text-orange-500'}`} />
			<span className={`${browser ? '' : 'text-[0.5rem]'}  text-nowrap`}>{isOnline ? 'Online' : 'In Person'}</span>
		</p>
	)
}

const DurationSection = ({ duration, browser, userTutor }) => {
	return (
		<p className={`font-worksans font-light my-3 ${browser ? 'text-base' : (userTutor ? ' text-sm ' : ' mx-auto text-sm ')}
		`}> {/* (userTutor ? ' text-sm ' : ' mx-auto text-sm ') */}
			<span className="font-medium">Duration: </span>{duration}  mins</p>
	)
}
const TutorDetailsSection = ({ tutor, browser }) => {
	return (
		<div className={`font-worksans group-hover:text-slate-100 flex items-center self-stretch ${browser ? 'gap-4' : 'flex-col gap-1'}`}>
			<AiOutlineUser
				size={56}
				className={` ${browser ? 'w-14 h-14 ' : 'w-11 h-11 '} rounded-full border border-slate-700`}
			/>
			<div className={`group-hover:text-slate-100  ${browser ? '' : 'text-center'}`}>
				<p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 font-medium">
					{tutor.first_name} {tutor.last_name}
				</p>
				<p className="font-semibold text-xs">
					{tutor.city}, {tutor.country}
				</p>
			</div>
		</div>
	)
}
const DescriptionSection = ({ description, browser }) => {
	return (
		<p className={`font-worksans  group-hover:text-slate-100 overflow-auto h-28 border text-sm border-slate-600 rounded-lg self-stretch px-3 py-2 ${browser ? 'my-3' : ''}`}>
			{description}
		</p>
	)
}


/* 	export default CourseCard2
 */

export default CourseCard2;
