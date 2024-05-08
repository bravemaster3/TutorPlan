import { useContext } from "react"
import FormCoursesContext from "../context/FormCoursesContext";

const useFormCoursesContext = () => {
	return useContext(FormCoursesContext);
}

export default useFormCoursesContext
