import React from 'react'

const RadioOptions = ({ id, name, label, ...props }) => {
	return (
		<div className='flex items-center gap-2 font-normal'>
			<input id={id} {...props} className={`  h-6 peer/label text-slate-200`} type="radio" name={name} />
			<label for={id} className={`text-md peer-checked/label:text-sky-500`}>{label}</label>


		</div>

	)
}

export default RadioOptions
