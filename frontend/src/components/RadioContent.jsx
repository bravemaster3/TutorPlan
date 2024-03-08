import React from 'react'
import { useState } from 'react'
import Label from './FormItem'
import RadioOptions from './RadioOptions';

const RadioContent = ({item}) => {
	const { labelTitle, id, type,  placeholder, value, name  } = item;

  return (

	<RadioOptions
	labelType={type}
	labelId={id} 
	labelName={name}
	labelValue={value}
	labelPlaceholder={placeholder}
	labelTitle={labelTitle}/>

  )
}

export default RadioContent
