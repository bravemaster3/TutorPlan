import React from "react";
import { RiCloseCircleFill, RiSearchLine } from "react-icons/ri";
import InputField from "./InputField";
import { AiFillInfoCircle } from "react-icons/ai";

/* label, id, inputClasses, containerClasses, type, placeholder, role, value, name, defaultChecked, disabled, onChange, note, myref, autoComplete, ariaDescribedby, ariaInvalid, onFocus, onBlur, required, showNote, leftIcon, rightIcon  */

const InputField2 = ({
	label,
	rightIcon,
	showNote,
	note,
	leftIcon,
	id,
	containerClasses,
	myRef,
	disabled,
	className: inputClasses,
	...props
}) => {
	const hasType = "type" in props;
	const isRadio = props.type === "radio";
	const ariaDescribedby = props["aria-describedby"];


	return (
		<>
			<div
				className={` ${containerClasses ? containerClasses : " "} ${isRadio || disabled ? " flex items-center  " : " flex flex-col  "
					} ${disabled ? " gap-1" : ""} `}
			>
				{label && (
					<label htmlFor={id} className={` font-[500] ${label ? label.className : " "} `}>
						{label.label}
					</label>
				)}
				<label
					className="relative block w-full m-auto "
					onSubmit={(e) => e.preventDefault()}
				>
					{!isRadio && <>{leftIcon && (
						<span
							id="left-icon"
							className="absolute inset-y-0 left-0 flex items-center pl-2"
						>
							{leftIcon}
						</span>
					)}
						{rightIcon && (
							<span
								id="right-icon"
								className="absolute inset-y-0 right-0 flex items-center pr-2"
							>
								{rightIcon}
							</span>
						)}
					</>
					}

					<input
						className={` peer  block w-full ${leftIcon && rightIcon
							? " px-9 "
							: (leftIcon ? " pl-9   " : " pl-4 ") +
							(rightIcon ? " pr-9 " : " pr-4 ")
							}  py-2 rounded-md shadow-sm placeholder-slate-400  placeholder:italic  
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500  ${disabled
								? " disabled:bg-transparent "
								: inputClasses
									? inputClasses
									: " "
							} `}
						{...(!!myRef ? { ref: myRef } : {})}
						{...(!!disabled ? { disabled: disabled } : {})}
						{...props}
					/>
					{/* {note && (

						<p
							id={ariaDescribedby}
							className={` mt-1 text-slate-800 text-sm sr-only peer-invalid:text-red-600 peer-invalid:not-sr-only`}
						>
							{note}
						</p>
					)} */}
				</label>
				{note && (
					<p
						id={ariaDescribedby}
						className={`${showNote ? " not-sr-only " : " sr-only "
							} mt-1 text-slate-800 text-sm `}
					>
						{note}
					</p>
				)}
			</div>
		</>
	);
	/* return (
		  <>
			  <div className={` ${containerClasses ? containerClasses : ' '} ${isRadio || disabled ? ' flex items-center  ' : ' flex flex-col '} ${disabled ? " gap-1" : ""} `}>
				  {label && <label htmlFor={id} className={`  ${label ? label.className : ' '} `} >{label.label}
  
				  </label>
				  }
				  <label
					  className="relative block w-full m-auto"
					  onSubmit={(e) => e.preventDefault()}
				  >
  
  
				  	
					  {leftIcon && (
						  <span id="left-icon" className="absolute inset-y-0 left-0 flex items-center pl-2">
							  {leftIcon}
						  </span>
					  )}
					  {rightIcon && (
						  <span id="right-icon" className="absolute inset-y-0 right-0 flex items-center pr-2">
							  {rightIcon}
						  </span>
					  )}
  
  
  
  
					  <input
  
						  className={`block w-full ${leftIcon && rightIcon ? ' px-9 ' : ((leftIcon ? ' pl-9   ' : ' pl-4 ') + (rightIcon ? ' pr-9 ' : ' pr-4 '))
					  }  py-2 rounded-md shadow-sm placeholder-slate-400  placeholder:italic 
		focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
		focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${disabled ? ' disabled:bg-transparent ' : inputClasses} `}
						  type={type}
						  id={id}
						  name={name}
  
						  {...(hasPlaceholder && !isRadio ? { placeholder: placeholder } : { placeholder: (label ? label.label : '') })}
						  // value={value || ''}
						  {...(hasValue ? { value: value } : {})}
						  {...(!!role ? { role: role } : {})}
						  {...(!!required ? { required: required } : {})}
						  {...(!!onBlur ? { onBlur: onBlur } : {})}
						  {...(!!onFocus ? { onFocus: onFocus } : {})}
						  {...(!!ariaInvalid ? { "aria-invalid": ariaInvalid } : {})}
						  {...(!!ariaDescribedby ? { "aria-describedby": ariaDescribedby } : {})}
						  {...(!!myref ? { ref: myref } : {})}
						  {...(!!autoComplete ? { autoComplete: autoComplete } : {})}
						  {...(!!disabled ? { disabled: disabled } : {})}
						  {...(!!onChange ? { onChange: onChange } : {})}
						  {...(hasDefaultChecked ? { defaultChecked: defaultChecked } : {})}
					  />
  
  
  
  
  
				  </label>
				  {note && <p id={ariaDescribedby} className={`${showNote ? " not-sr-only " : " sr-only "} mt-1 text-slate-800 text-sm `}>
					  {note}
				  </p>}
  
  
			  </div>
  
		  </>
  
	  ); */
};
/* className="mt-1 block w-full pr-9 pl-9 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  placeholder:italic 
	  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
	  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
	  invalid:border-pink-500 invalid:text-pink-600
	  focus:invalid:border-pink-500 focus:invalid:ring-pink-500" */
{
	/* <span id="right-icon" className="absolute inset-y-0 right-0 flex items-center pr-2">
						  <RiCloseCircleFill size={16} className="text-gray-500 mr-2" />
					  </span>
					  <span id="left-icon" className="absolute inset-y-0 left-0 flex items-center pl-2">
						  <RiSearchLine size={16} className="text-gray-500 ml-2" />
					  </span> */
}

export default InputField2;
/* 
const InputField = ({ label, id, inputClasses, containerClasses, type, placeholder, role, value, name, defaultChecked, disabled, onChange }) => {
	const hasValue = !!value
	const hasPlaceholder = !!placeholder
	const hasDefaultChecked = !!defaultChecked
	const isRadio = type === 'radio';
	//  console.log(`${isRadio ? ('peer-checked/' + { id } + ':text-slate-200') : ''}`)
	//  console.log(`${isRadio ? ('peer/' + { id }) : ''}`)
	console.log("Input")

	return (

		<div className={`${isRadio || disabled ? ' flex items-center  ' : ' flex flex-col '} ${disabled ? " gap-1" : ""} ${containerClasses ? containerClasses : ' '} `}>

			{label && (<label htmlFor={id} className={`  ${label.className} `}>{label.label}</label>)}
			<input
				className={`  ${disabled ? ' disabled:bg-transparent ' : inputClasses} `} type={type}
				id={id}
				name={name}
				{...(hasPlaceholder && !isRadio ? { placeholder: placeholder } : { placeholder: label.label })}
				// value={value || ''}
				{...(hasValue ? { value: value } : {})}
				{...(!!role ? { role: role } : {})}
				{...(!!disabled ? { disabled: disabled } : {})}
				{...(!!onChange ? { onChange: onChange } : {})}
				{...(hasDefaultChecked ? { defaultChecked: defaultChecked } : {})}

			/>

		</div>
	)
} */
{
	/* <label className=" relative block w-60 m-auto" onSubmit={(e) => e.preventDefault()}>
	  <span className="sr-only">Search</span>
	  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
		  <RiSearchLine size={16} className="text-gray-500 mr-2" />
	  </span>
	  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
		  <RiSearchLine size={16} className="text-gray-500 ml-2" />
	  </span>
	  <label htmlFor="email"></label>
	  <input id="email" name="email" type="email" required className="mt-1 block w-full pr-9 pl-9 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  placeholder:italic 
		focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
		disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
		invalid:border-pink-500 invalid:text-pink-600
		focus:invalid:border-pink-500 focus:invalid:ring-pink-500
	  " placeholder="Let's go fishing..."
  	
  
	  />
  </label >
   */
}
