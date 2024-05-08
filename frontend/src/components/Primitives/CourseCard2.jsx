import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RiCircleFill } from "react-icons/ri";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { UserCalendar } from "../MyDeskPages";
import useAuth from "../../hooks/useAuth";
import AddCourse from "../MyDeskPages/AltAddCourse";
//import { FormProvider } from "../../context/FormProvider";
import useFormContext from "../../hooks/useFormContext";
import { CalendarModal } from "../MyDeskPages";
import useFormCoursesContext from "../../hooks/useFormCoursesContext";
import CourseForm from "../MyDeskPages/CourseForm";
import useSWR from "swr";
import { coursesUrlEndpoint, getCourseStudents } from "../../apiConfig";

const CourseCard2 = ({ browser = true, ...courseData }) => {
	const { auth, isTutor } = useAuth();
	const { data,
		setData, 
		reset,
		 setReset,
		selectedCourseId, 
		setSelectedCourseId,enrolled,setEnrolled } = useFormCoursesContext()
	const { setEditMode } = useFormContext();
	const {
		title,
		fee,
		description,
		course_type,
		duration,
		tutor,
		...otherData
	} = courseData;

	

	//console.log("in course card 2", title);
	//console.log( "In course card2>>>>",courseData)




	const isOnline = course_type === "online";
	//const isPhysical = course_type === 'physical'
	//console.log(title,"is online", isOnline)
	//console.log(title, "is physical", isPhysical)
	const isBoth = course_type === "both";

	const localizer = momentLocalizer(moment);
	const [modalOpen, setModalOpen] = useState(false);


	const openModal2 = () => {
		console.log("Opeing mod")
		setData(courseData)
		setSelectedCourseId(courseData.id)
		if(isTutor&&auth?.userData?.id === courseData.tutor.id){
			console.log("Enrolling Tutor")
			setEnrolled(true)
		}
		setModalOpen(true);
		////console.log("opening modal");
	};

	const closeModal2 = () => {
		setModalOpen(false);
		setReset(true);
	};
	//console.log(data)
	/* const browser = true; */
	//const isTutor = auth.roles === "tutor"; /* context manager */

	/* const CalendarModal = () => {
		
		return (
			<div className=" flex flex-col  border border-green-600 h-[90%] mx-auto rounded-lg  gap-2 ">
				{!isTutor && (
					<section
						id="modal-titleblock"
						className="text-center w-full h-1/6"
					>
						<h2 className="font-roboto font-bold text-2xl">{title}</h2>
						<h3 className="font-roboto font-bold text-lg">
							By {tutor.first_name} {tutor.last_name}
						</h3>
					</section>
				)}
				<div className=" w-full h-5/6 gap-4 flex rounded-lg overflow-auto   ">
					<section
						id="courseDetails-section"
						className="w-1/2 h-full border border-rose-950   "
					>
						<AddCourse courseData={courseData} />
					</section>

					<section
						id="calendar-section"
						className=" w-1/2 h-full border flex flex-col  "
					>
						{!isTutor && (
							<section id="calendar-section-titleblock" className="text-center">
								<h2 className="font-roboto font-bold text-2xl">Calendar</h2>
								<h3 className="font-roboto font-bold text-lg">
									Book An Appointment With {tutor.first_name}{" "}
								</h3>
								<h4 className="font-roboto mt-2 text-md">
									Select a slot to book appointment{" "}
								</h4>
							</section>
						)}

						<div id="calendar" className="h-4/6 p-10  ">
							<Calendar localizer={localizer} />
						</div>
						<button
							id="calendar-save-btn"
							className="bg-emerald-500 text-white px-4 py-2 h-11 min-w-fit mx-auto rounded hover:bg-emerald-600"
						>
							Book
						</button>
					</section>
				</div>
			</div>
		);
	}; */

	return (
		<>
			<article
				onClick={openModal2}
				className={` group course-card hover:cursor-pointer   dark:text-slate-300  shadow-md rounded-2xl  px-4  py-4 ${browser
					? " bg-black-gradient  w-[260px]  "
					: "flex bg-gray-800 w-[360px] min-h-52 max-h-60 gap-2  items-start justify-between "
					} `}
			>
				{/* flex bg-gray-800 w-[360px] min-h-52 max-h-60 gap-2  items-start justify-between */}
				{browser ? (
					<>
						<TitleSection title={title} fee={fee} browser={browser} />
						<DurationSection
							duration={duration}
							browser={browser}
							isTutor={isTutor}
						/>
						<DescriptionSection description={description} browser={browser} />
						<TutorDetailsSection tutor={tutor} browser={browser} />
						<CourseTypeSection
							isBoth={isBoth}
							isOnline={isOnline}
							browser={browser}
						/>
					</>
				) : (
					<>
						<section
							id="course-title"
							className="  w-[150px] h-[162px] flex  flex-col gap-1 justify-between m-auto  "
						>
							<TitleSection title={title} fee={fee} browser={browser} />
							<CourseTypeSection
								isBoth={isBoth}
								isOnline={isOnline}
								browser={browser}
							/>
						</section>
						<section className=" w-[210px]  m-auto flex flex-col justify-center gap-1 ">
							{isTutor ? (
								<>
									<DescriptionSection
										description={description}
										browser={browser}
									/>
								</>
							) : (
								<>
									<TutorDetailsSection tutor={tutor} browser={browser} />
								</>
							)}

							<DurationSection
								duration={duration}
								browser={browser}
								isTutor={isTutor}
							/>
						</section>
					</>
				)}
			</article>
			{/* <CalendarModal isOpen={modalOpen} onClose={closeModal2} title={title} tutor={tutor} /> */}
			{/* {modalOpen && createPortal(
				<Modal isOpen={modalOpen} onClose={closeModal2} />,				
			)} */}
			{/* <FormProvider> */}
			<Modal
				isOpen={modalOpen}
				onClose={closeModal2}
				children={<CourseForm />}
			/>
			{/* </FormProvider> */}
		</>
	);
};

const TitleSection = ({ title, fee, browser }) => {
	return (
		<div
			className={` py-2 flex justify-between  items-center  group-hover:text-slate-100 ${browser ? " gap-1 h-10 " : " flex-col gap-4 w-full "
				} `}
		>
			{/* flex-col gap-4 w-full  */}
			<h2 className=" text-lg leading-tight  text-center font-roboto font-bold line-clamp-2 overflow-hidden  ">
				{title}
			</h2>
			<h1
				className=" font-roboto font-bold text-3xl
				 text-blue-500 "
			>
				${fee}
			</h1>
		</div>
	);
};
const CourseTypeSection = ({ isOnline, isBoth, browser }) => {
	return (
		<div
			className={` font-worksans group-hover:text-slate-100 flex ${browser ? " justify-between mt-3 " : "flex-col gap-1 "
				}  `}
		>
			{(!isOnline || isBoth) && (
				<CourseTypeIcon isOnline={false} browser={browser} />
			)}
			{(isOnline || isBoth) && (
				<CourseTypeIcon isOnline={true} browser={browser} />
			)}
		</div>
	);
};

const CourseTypeIcon = ({ isOnline, browser }) => {
	//console.log("in icon procezz>",isOnline)
	return (
		<p
			className={`group-hover:text-slate-100 flex justify-start py-0  items-center place-content-center ${browser ? "   px-2 " : " max-w-[6rem]  px-1 "
				}   gap-2 border border-blue-800 rounded-[32px]`}
		>
			<RiCircleFill
				className={`${isOnline ? "text-teal-500" : "text-orange-500"}`}
			/>
			<span className={`${browser ? "" : "text-[0.75rem]"}  text-nowrap`}>
				{isOnline ? "Online" : "In Person"}
			</span>
		</p>
	);
};

const DurationSection = ({ duration, browser, isTutor }) => {
	return (
		<p
			className={`font-worksans font-light my-3 ${browser ? "text-base" : isTutor ? " text-sm " : " mx-auto text-sm "
				}
		`}
		>
			{" "}
			{/* (isTutor ? ' text-sm ' : ' mx-auto text-sm ') */}
			<span className="font-medium">Duration: </span>
			{duration} mins
		</p>
	);
};
const TutorDetailsSection = ({ tutor, browser }) => {
	return (
		<div
			className={`font-worksans group-hover:text-slate-100 flex items-center self-stretch ${browser ? "gap-4" : "flex-col gap-1"
				}`}
		>
			<AiOutlineUser
				size={56}
				className={` ${browser ? "w-14 h-14 " : "w-11 h-11 "
					} rounded-full border border-slate-700`}
			/>
			<div
				className={`group-hover:text-slate-100  ${browser ? "" : "text-center"
					}`}
			>
				<p className="font-worksans group-hover:text-slate-100  text-slate-600 dark:text-slate-300 truncate font-medium">
					{tutor.first_name} {tutor.last_name}
				</p>
				<p className="font-semibold text-xs">
					{tutor.city}, {tutor.country}
				</p>
			</div>
		</div>
	);
};
const DescriptionSection = ({ description, browser }) => {
	return (
		<p
			className={`font-worksans  group-hover:text-slate-100 overflow-auto h-28 border text-sm border-slate-600 rounded-lg self-stretch px-3 py-2 ${browser ? "my-3" : ""
				}`}
		>
			{description}
		</p>
	);

};

/* 	export default CourseCard2
 */

export default CourseCard2;
