import React from 'react'

const Skeleton = ({classes}) => {
  return (
	  <div className={` border border-blue-300 shadow p-2 animate-pulse  mx-auto ${classes}`}></div>
  )
}

export default Skeleton
