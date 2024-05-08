import React from 'react'
import Skeleton from './Skeleton'
Skeleton
const SkeletonUser = () => {
  return (
	  <div className={`min-w-72 min-h-64 flex flex-col items-center justify-center gap-2 border  py-4 px-4 rounded-md`}> 
		  <Skeleton classes={" w-14 h-14 rounded-full border border-blue-400 "} />
		  <Skeleton classes={" w-[150px] h-4 rounded-md bg-slate-300 "} />
		  <Skeleton classes={" w-11/12 h-1 rounded-md bg-slate-300 "} />
		  <Skeleton classes={" w-7/12 h-4 rounded-md bg-slate-300 "} />
	</div>
  )
}

export default SkeletonUser
