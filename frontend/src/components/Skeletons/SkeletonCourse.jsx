import React from 'react'
import Skeleton from './Skeleton'

const SkeletonCourse = ({browser}) => {
	//console.log(browser)
  return (
	  <div className={`${browser===true ? " w-[260px]  ":' w-[360px] h-48  flex items-center ' }  border rounded-md`}>
		{browser===true?(<>
			  <Skeleton classes={" w-11/12 h-14 mt-3 rounded-md bg-slate-300"} />
			  <Skeleton classes={" w-11/12 h-28 px-3 py-2 mt-4 rounded-md bg-slate-400"} />
			  <div className='flex items-center self-stretch gap-2 my-2 '>
				  <Skeleton classes={" w-14 h-14 rounded-full border "} />
				  <Skeleton classes={" w-[150px] h-10 bg-slate-300 "} />
			  </div>
			  <Skeleton classes={" w-11/12 h-14 px-3 py-2 mb-3 rounded-md bg-slate-400"} />
			  </>):(
				<>
				  <div className='w-[150px] h-[162px] flex flex-col   gap-1 py-3  justify-center rounded-md '>

						  <Skeleton classes={" w-8/12 h-10 m-auto  rounded-md bg-slate-300 "}/>
						  <Skeleton classes={" w-1/2 h-14 m-auto  rounded-md bg-slate-300 "}/>
						  				  
						  <Skeleton classes={ " w-11/12  h-4 left-0 rounded-md bg-slate-300 "} />
						  <Skeleton classes={ " w-11/12  h-4  rounded-md bg-slate-300 "} />
			  </div>
					  <div className='w-[210px] flex flex-col px-3 gap-1 py-2 justify-center rounded-md '>
						  <Skeleton classes={" w-14 h-14 rounded-full border "} />

						  <Skeleton classes={" w-[150px] h-4 rounded-md bg-slate-300 "} />
						  <Skeleton classes={" w-11/12 h-1 rounded-md bg-slate-300 "} />
						  <Skeleton classes={" w-7/12 h-4 rounded-md bg-slate-300 "} />

			  </div>
				  </>)}
		  
		  
		  

	</div>
  )
}

export default SkeletonCourse
