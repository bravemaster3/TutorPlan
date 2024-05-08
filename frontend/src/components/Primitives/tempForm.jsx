import React, { useEffect, useRef, useState } from 'react'


const TempForm = ({ children }) => {

	return (
		<form onSubmit={(e) => { e.preventDefault() }} className='flex font-worksans flex-col border gap-2 mx-auto justify-center   p-8 rounded-md'>
			{children}
		</form>
	)
}

export default TempForm
