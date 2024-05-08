import { createContext, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({children})=>{
	const [auth, setAuth] = useState({})
	const isTutor = auth?.roles === 'tutor'

	return(
		<AuthContext.Provider value={{ auth, setAuth, isTutor }}>
			{children}
		</AuthContext.Provider>
	)

}

export default AuthContext


/* const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext; */
