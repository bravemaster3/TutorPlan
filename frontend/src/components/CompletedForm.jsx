import React from 'react'
import FormContent from './FormContent'
const CompletedForm = ({items}) => {
  return (
	<div>
		{items.map(item =>(
			<FormContent
			 key={item.id}
			  item={item} />
			
		))}
</div>
  )
}

export default CompletedForm
