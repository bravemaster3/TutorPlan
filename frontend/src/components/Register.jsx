import React, { useEffect, useRef, useState } from 'react'
import { InputField2 } from './Primitives'
import { AiFillInfoCircle } from "react-icons/ai";
import { RiCloseCircleFill, RiEyeCloseFill, RiEyeLine, RiSearchLine } from "react-icons/ri";
import axios from '../apiConfig'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER_REGEX_T = /^[A-Za-z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [fname, setFname] = useState('');
	const [validFname, setValidFname] = useState(false);
	const [fnameFocus, setFnameFocus] = useState(false);

	const [showPwd, setShowPwd] = useState(false)

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
		setValidFname(USER_REGEX.test(fname));
	}, [fname])

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
			setErrMsg("Invalid Entry");
			return;
		}
		console.log(user, pwd);
		setSuccess(true);
	}

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<a href="#">Sign In</a>
					</p>
				</section>
			) : (
				<section className='flex font-worksans flex-col border mx-auto justify-center  p-8 rounded-md gap-2'>
						<p ref={errRef} className={errMsg ? "errmsg" : "sr-only"} aria-live="assertive">{errMsg}</p>

						<form className='mx-auto border border-slate-200 p-8 ' onSubmit={handleSubmit}>
							<h1 className='text-center text-3xl font-bold font-roboto mb-10'>Register</h1>
							<InputField2
								type={"text"}
								id={"username"}
								label={{ label: "Username", className: "font-sky-500" }}
								myRef={userRef}
								autoComplete="off"
								onChange={(e) => setUser(e.target.value)}
								value={user}
								required={true}
								aria-invalid={validName ? "false" : "true"}
								className={" font-bold uppercase "}
								aria-describedby="uidnote"
								onFocus={() => setUserFocus(true)}
								onBlur={() => setUserFocus(false)}
								note={"4 to 24 characters"}
								showNote={userFocus && user && !validName}
								leftIcon={<AiFillInfoCircle onClick={() => { console.log("clicked!!!") }} />}
								rightIcon={<RiCloseCircleFill />}
							/>
							<InputField2
								type={"text"}
								id={"firstname"}
								label={{ label: "First Name", className: "font-sky-500" }}

								autoComplete="off"
								onChange={(e) => setFname(e.target.value)}
								value={fname}
								required={true}
								aria-invalid={validFname ? "false" : "true"}

								aria-describedby="fnnote"
								pattern={USER_REGEX_T.source}
								onFocus={() => setFnameFocus(true)}
								onBlur={() => setFnameFocus(false)}
								note={"Correct NAme"}
								showNote={fnameFocus && fname && !validFname}
								leftIcon={<AiFillInfoCircle onClick={() => { console.log("clicked!!!") }} />}
								rightIcon={<RiCloseCircleFill />}
							/>
							<InputField2
								label={{ label: "Password", className: "font-sky-500" }}
								type={showPwd ? "text" : "password"}
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
								// onClick={() => setShowPwd(!showPwd)}
								rightIcon={showPwd ? <RiEyeLine onClick={() => setShowPwd(!showPwd)} /> : <RiEyeCloseFill onClick={() => setShowPwd(!showPwd)} />}
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
								leftIcon={<RiEyeCloseFill />}

							/>
							<button className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>



						</form>


					</section>
			)}
			{/* <div className=' foo'>
				<p>Paragraph</p>
				<label>I am a label</label>
				<label className='foo'>
					<input className='bar' type="text" />
				</label>
				<p>Paragraph</p>

			</div>
			<div className="input-wrap mx-auto">
				<input type="text" className="Name" />
				<span className="help  hid">Your name sir</span>
			</div> */}

		</>
	)
}

export default Register
