
import useAuth from "./useAuth";

const useLogout = () => {
	const { setAuth } = useAuth();

	const logout = () => {
		setAuth({});
	};

	return logout;
}



export default useLogout
