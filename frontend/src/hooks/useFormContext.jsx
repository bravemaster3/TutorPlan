import { useContext } from "react"
import FormContext from "../context/FormProvider"

const useFormContext = () => {
	return useContext(FormContext);
}

export default useFormContext
