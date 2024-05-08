import React, { Children } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { createPortal } from 'react-dom';
MdOutlineClose
const Modal = ({ isOpen, children, onClose }) => {
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};
	return createPortal(
		<>
			{isOpen &&
				<>
					<div className="fixed  inset-0 bg-zinc-600 opacity-50 z-[900]  " />
					<div onClick={handleBackdropClick} className=" h-full border border-yellow-300 fixed inset-0 z-[1000] flex rounded items-center justify-center backdrop-blur-sm  "> {/* top-8 inset-x-10 */}

						<div className='baseform relative p-6  h-[90%] border border-red-600  rounded-lg shadow-lg flex  justify-center items-center'>
							<button className="absolute top-6 right-6  rounded-full hover:bg-orange-500 hover:text-slate-100  w-fit z-[200] flex items-center justify-center" onClick={onClose}>
								<MdOutlineClose size={30} className=" w-7 h-7   " />
							</button>


							<div className=' h-full   p-6'> {/* border border-purple-600 */}




								{children}
							</div>

						</div>

					</div>
				</>
			}


			{/* {
				isOpen && (
					<div onClick={handleBackdropClick} className=" fixed inset-8 z-[1000] flex rounded items-center justify-center backdrop-blur-sm  ">

						<div className='baseform relative p-6 rounded-lg shadow-lg flex  justify-center items-center'>
							<div className="mb-4">
								<button className="absolute  top-5  right-6  w-fit z-[200] flex items-center justify-center" onClick={onClose}>

									<MdOutlineClose size={30} className=" w-8 h-8 p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
								</button>
							</div>
							<div className='  p-8'>
								{children}

							</div>

						</div>

					</div>


				)
			} */}

		</>,
		document.getElementById('portal')
	)
}

export default Modal
/* 		<>
			{isOpen && <div className="fixed inset-0 bg-zinc-600 opacity-50 z-[900] " />}

			{
				isOpen && (
					<div onClick={handleBackdropClick} className=" fixed inset-0 z-[1000] flex rounded items-center justify-center backdrop-blur-sm  overflow-auto ">



						<div className='baseform relative p-8 rounded-lg shadow-lg flex  justify-center items-center'>
							<div className="mb-4">
								<button className="absolute  top-9 right-10  w-fit z-[200] flex items-center justify-center" onClick={onClose}>

									<MdOutlineClose size={30} className=" w-8 h-8 p-1 rounded-full hover:bg-orange-500 hover:text-slate-100" />
								</button>
							</div>
							<div className='p-8'>
								{children}

							</div>

						</div>

					</div>


				)
			}

		</> */
