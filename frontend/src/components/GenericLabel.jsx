import React from 'react';

const GenericLabel = ({ label, id, type, placeholder, value, name, defaultChecked }) => {
  const hasValue = !!value
  const hasPlaceholder = !!placeholder
  const hasDefaultChecked = !!defaultChecked
  const isRadio = type === 'radio';


  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        {...(hasPlaceholder && !isRadio ? { placeholder: placeholder } : { placeholder: label })}
        {...(hasValue ? { value: value } : {})}
        {...(hasDefaultChecked ? { defaultChecked: defaultChecked } : {})}
      />
    </>
  );
};

export default GenericLabel;
