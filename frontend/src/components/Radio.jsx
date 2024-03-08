import React from 'react'
import { useState } from 'react'
import Label from './FormItem'
import RadioContent from './RadioContent';

const Radio = ({items}) => {
  return (

	<div className="radio-group">
	{items.map(item =>(
			<RadioContent
			 key={item.id}
			  item={item} />
			
		))}
		  </div>

  )
}

export default Radio
