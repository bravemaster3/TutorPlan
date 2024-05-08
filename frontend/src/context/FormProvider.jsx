import { createContext, useEffect, useState } from "react";



const FormContext = createContext({})
export const FormProvider = ({ children }) => {
	const [currentFormData, setCurrentFormData] = useState({})
	const [editMode, setEditMode] = useState(false);

	const handleChange = (e) => {
		const type = e.target.type;
		const name = e.target.name;
		const value = type === 'checkbox' ? e.target.checked : e.target.value;

		setCurrentFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	return (
		<FormContext.Provider value={{ handleChange, currentFormData, setCurrentFormData, editMode, setEditMode }}>
			{children}
		</FormContext.Provider>
	)

}

export default FormContext
