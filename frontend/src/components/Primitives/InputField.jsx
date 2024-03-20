import React from 'react'

/* import PropTypes from 'prop-types' */

/* TODO:
handle input validation and on hange events where necessary */

const InputField = ({ label, id, inputClasses, containerClasses, type, placeholder, role, value, name, defaultChecked, disabled, onChange }) => {
  const hasValue = !!value
  const hasPlaceholder = !!placeholder
  const hasDefaultChecked = !!defaultChecked
  const isRadio = type === 'radio';
  /*  console.log(`${isRadio ? ('peer-checked/' + { id } + ':text-slate-200') : ''}`)
   console.log(`${isRadio ? ('peer/' + { id }) : ''}`) */
  console.log("Input")

  return (

    <div className={`${isRadio || disabled ? ' flex items-center  ' : ' flex flex-col '} ${disabled ? " gap-1" : ""} ${containerClasses ? containerClasses : ' '} `}>

      {label && (<label htmlFor={id} className={`  ${label.className} `}>{label.label}</label>)}
      <input
        className={`  ${disabled ? ' disabled:bg-transparent ' : inputClasses} `} type={type}
        id={id}
        name={name}
        {...(hasPlaceholder && !isRadio ? { placeholder: placeholder } : { placeholder: label.label })}
        /* value={value || ''} */
        {...(hasValue ? { value: value } : {})}
        {...(!!role ? { role: role } : {})}
        {...(!!disabled ? { disabled: disabled } : {})}
        {...(!!onChange ? { onChange: onChange } : {})}
        {...(hasDefaultChecked ? { defaultChecked: defaultChecked } : {})}

      />

    </div>
  )
}
console.log("Done")
/* InputField.propTypes = {} */
InputField.defaultProps = {

  id: "category",
  type: "text",

  value: undefined,
  name: "category"
}

export default InputField;
