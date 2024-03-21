import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { MdOutlineClose } from 'react-icons/md'

const CalendarModal = ({ title, tutor, }) => {
	const localizer = momentLocalizer(moment)
	const isTutor = false

	console.log("In Modal")
	return (
		<>

			{isTutor && (<section id='courseDetails-section' className='bg-yellow-600'>
				Course Details for tutor here
			</section>)}

			<section id='calendar-section' className='flex flex-col justify-center items-center bg-pink-500'>
				{!isTutor && (<section id='calendar-section-titleblock' className='text-center'>
					<h2 className="font-roboto font-bold text-2xl">{title}</h2>
					<h3 className="font-roboto font-bold text-lg">By {tutor.first_name} {tutor.last_name}</h3>
					<h4 className="font-roboto mt-2 text-md">Select a slot to book appointment </h4>

				</section>)}


				<div id='calendar' className="h-[460px] p-10">
					<Calendar
						localizer={localizer} />

				</div>
				{/* button grey before change green on change */}
				<button id='calendar-save-btn' className="bg-emerald-500 text-white px-4 py-2 h-11 min-w-fit mx-auto rounded hover:bg-emerald-600">Book</button>


			</section>


		</>
	)
	/* 	return (
			<>
				{isOpen && <div className="fixed inset-0 bg-slate-600 opacity-50 z-[900] backdrop-blur-lg" />}
				{isOpen && (
					<dialog open onClick={handleBackdropClick} className="fixed inset-0 z-[1000] flex rounded items-center justify-center overflow-auto dark:bg-zinc-700 dark:text-slate-300">
						<div className="bg-transparent p-8 rounded-lg shadow-lg flex  justify-center items-center">
							{isTutor && (<section id='courseDetails-section' className='bg-yellow-600'>
								Course Details for tutor here
							</section>)}
							<div id='close-btn' className="mb-4">
								<button className="absolute top-6 right-6 p-2 w-fit" onClick={onClose}>
	
									<MdOutlineClose size={30} className=" w-8 h-8 p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
								</button>
	
							</div>
							<section id='calendar-section' className='flex flex-col justify-center items-center bg-pink-500'>
								{!isTutor && (<section id='calendar-section-titleblock' className='text-center'>
									<h2 className="font-roboto font-bold text-2xl">{title}</h2>
									<h3 className="font-roboto font-bold text-lg">By {tutor.first_name} {tutor.last_name}</h3>
									<h4 className="font-roboto mt-2 text-md">Select a slot to book appointment </h4>
	
								</section>)}
	
	
								<div id='calendar' className="h-[460px] p-10">
									<Calendar
										localizer={localizer} />
	
								</div>
	
								<button id='calendar-save-btn' className="bg-emerald-500 text-white px-4 py-2 h-11 min-w-fit mx-auto rounded hover:bg-emerald-600">Book</button>
	
	
							</section>
	
	
	
	
						</div>
	
					</dialog>
				)}
	
			</>
		) */
}

export default CalendarModal
