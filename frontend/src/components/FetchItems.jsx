import React from 'react'
import FormItem from './FormItem';
import ButtonGroup from './ButtonGroup';

const FetchItems = ({items, isFormInput=true}) => {

  
  return (
	<>
          {items.map(item => (
            isFormInput? (<FormItem key={item.id} item={item} />):(<ButtonGroup key={item.id} item={item} />)
          ))}
        </>
    
  );
};

export default FetchItems;
