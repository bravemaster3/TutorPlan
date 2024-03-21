import React, { useEffect, useRef, useState } from 'react'
import { InputField2 } from './Primitives'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user])

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd])
	return (
		<section>
			<p ref={errRef} className={errMsg ? "errmsg" : "sr-only"} aria-live="assertive">{errMsg}</p>

			<form className='w-3/4 mx-auto border border-slate-200 p-8'>
				<h1 className='text-center text-3xl font-bold font-roboto mb-10'>Register</h1>
				<InputField2
					type={"text"}
					id={"username"}
					label={{ label: "Username", className: "font-sky-500" }}
					myref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required={true}
					aria-invalid={validName ? "false" : "true"}
					aria-describedby="uidnote"
					onFocus={() => setUserFocus(true)}
					onBlur={() => setUserFocus(false)}
					note={"4 to 24 characters"}
					showNote={userFocus && user && !validName}
				/>
				<InputField2
					label={{ label: "Password", className: "font-sky-500" }}
					type={"password"}
					id={"password"}
					onChange={(e) => setPwd(e.target.value)}
					value={pwd}
					required={true}
					aria-invalid={validName ? "false" : "true"}
					aria-describedby="pwdnote"
					onFocus={() => setPwdFocus(true)}
					onBlur={() => setPwdFocus(false)}
					note={"8 to 24 characters"}
					showNote={pwdFocus && !validPwd}
				/>
				<InputField2
					label={{ label: " Confirm Password", className: "font-sky-500" }}
					type={"password"}
					id={"confirm_pwd"}
					onChange={(e) => setMatchPwd(e.target.value)}
					value={matchPwd}
					required={true}
					aria-invalid={validMatch ? "false" : "true"}
					aria-describedby="pwdnote"
					onFocus={() => setMatchFocus(true)}
					onBlur={() => setMatchFocus(false)}
					note={"Must match the first password input field."}
					showNote={matchFocus && !validMatch}
				/>
				<button className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>



			</form>


		</section>
	)
}

export default Register
