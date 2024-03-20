import React from 'react'

const RadioOptions = ({ id, name, label }) => {
	return (
		<>
			<input id={id} className={`peer/${id} text-slate-200`} type="radio" name={name} />
			<label for={id} className={`peer-checked/${id}:text-sky-500`}>{label}</label>


		</>

	)
}

export default RadioOptions
