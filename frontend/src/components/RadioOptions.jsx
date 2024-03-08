import React from 'react'

const RadioOptions = ({labelType, labelId, labelName, labelPlaceholder, labelValue, labelTitle}) => {
  return (
<>
	<label htmlFor={labelId }>{labelTitle}</label>
          <input
            type={labelType}
            id={labelId}
            name={labelName}
			placeholder={labelPlaceholder}
			value={labelValue}
			defaultChecked={labelValue === "Online"}
          />
</>
  )
}

export default RadioOptions
