import React, { useEffect, useRef, useState } from 'react'
import { GenerateComponents, InputField, InputField2, RadioOptions } from './Primitives'
import { AiFillInfoCircle } from "react-icons/ai";
import { RiCloseCircleFill, RiEyeCloseFill, RiEyeLine, RiSearchLine } from "react-icons/ri";
import axios from '../apiConfig'
import md5 from 'md5';





const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{4,23}$/;
// const USER_REGEX = /^[A-z][A-z0-9-_]{4,23}$/;
// const USER_REGEX_T = /^[A-Za-z]{3,23}$/;
const NAME_REGEX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const WORD_FIELD_INFO = () => { return (<> 4 to 24 characters.< br /> Must begin with a letter.< br /> Letters, numbers, underscores, hyphens allowed.</>) }

const PWD_FIELD_INFO = () => {
	return (<> 8 to 24 characters.< br />
		Must include uppercase and lowercase letters, a number and a special character.< br />
		Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></>)
}
const PHONE_FIELD_INFO = (error) => { return (<>{error ? "Invalid phone number" : "Preferablly Whatsapp"}</>) }



const Register = () => {


	const userRef = useRef();
	const errRef = useRef();
	const fnameRef = useRef();
	/* 	const lnameRef = useRef();
		const cityRef = useRef();
		const countryRef = useRef(); */


/* 	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false); */

	const [bio, setBio] = useState('');
	const [first_name, setFirstName] = useState('');
	const [validFirstName, setValidFirstName] = useState(false);
	const [firstNameFocus, setFirstNameFocus] = useState(false);

	const [last_name, setLastName] = useState('');
	const [validLastName, setValidLastName] = useState(false);
	const [lastNameFocus, setLastNameFocus] = useState(false);

	const [city, setCity] = useState('');
	const [validCity, setValidCity] = useState(false);
	const [cityFocus, setCityFocus] = useState(false);

	const [country, setCountry] = useState('');
	const [validCountry, setValidCountry] = useState(false);
	const [countryFocus, setCountryFocus] = useState(false);

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [phone_number, setPhoneNumber] = useState('');
	const [validPhoneNumber, setValidPhoneNumber] = useState(false);
	const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);


	const [showPwd, setShowPwd] = useState(false)
	const [role, setRole] = useState('student')

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [PwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		fnameRef.current.focus();
	}, [])

	useEffect(() => {
		setValidFirstName(NAME_REGEX.test(first_name));
	}, [first_name])

	useEffect(() => {
		setValidLastName(NAME_REGEX.test(last_name));
	}, [last_name])

	useEffect(() => {
		setValidCity(NAME_REGEX.test(city));
	}, [city])

	useEffect(() => {
		setValidCountry(NAME_REGEX.test(country));
	}, [country])

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email])

	useEffect(() => {
		setValidPhoneNumber(PHONE_REGEX.test(phone_number));
	}, [phone_number])

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('');
	}, [first_name, last_name, city, country, phone_number, pwd, matchPwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = NAME_REGEX.test(first_name);
		const v2 = NAME_REGEX.test(last_name);
		const v3 = NAME_REGEX.test(city);
		const v4 = NAME_REGEX.test(country);
		const v5 = PHONE_REGEX.test(phone_number);
		const v6 = EMAIL_REGEX.test(email);
		const v7 = PWD_REGEX.test(pwd);
		if ((!v1 || !v2 & v3 || !v4 || !v5 || !v6 || !v7)) {
			console.log("oopsie")
			console.log(v1, v2, v3, v4, v5, v6, v7);
			setErrMsg(" Invalid Entry - Missing Fields ");
			return;
		}
		console.log(first_name, last_name, city, country, phone_number, email, bio, md5(pwd), role);
		const password = md5(pwd)

		// setSuccess(true);
		try {
			const response = await axios.post(`/${role}s`,
				JSON.stringify({ first_name, last_name, city, country, phone_number, email, bio, password }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				}
			);
			// TODO: remove console.logs before deployment
			console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response))
			setSuccess(true);
			//clear state and controlled inputs
			setFirstName('');
			setLastName('');
			setCity('');
			setCountry('');
			setPhoneNumber('');
			setEmail('');
			setPwd('');
			setMatchPwd('');
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 409) {
				setErrMsg('Username Taken');
			} else {
				setErrMsg('Registration Failed')
			}
			errRef.current.focus();
		}
	}
	const radioGroup = {
		className: 'font-[500]',
		label: 'Are you a tutor or a student?',
		optionsClassName: 'ml-4',
		options: [
			{
				id: 'student',
				label: 'Student',
				name: 'role',
				value: 'student',
				onChange: (e) => { setRole(e.target.value) },


				defaultChecked: true
			},
			{
				id: 'tutor',
				label: 'Tutor',
				name: 'role',
				value: 'tutor',
				onChange: (e) => { setRole(e.target.value) }

			},
		],
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
					<section className='flex font-worksans w-3/4 flex-col border border-slate-700 mx-auto justify-center  p-8 rounded-md gap-2'>
						<p ref={errRef} className={errMsg ? "errmsg text-center" : "sr-only"} aria-live="assertive">{errMsg}</p>


						<form className=' font-worksans w-full  flex flex-col gap-3 mx-auto border border-slate-200 p-8 ' onSubmit={handleSubmit}>
							<h1 className='text-center text-3xl font-bold font-roboto mb-10'>Register</h1>

							<InputField2
								type={"text"}
								id={"firstname"}
								label={{ label: "First Name", className: "  text-nowrap font-sky-500" }}
								myRef={fnameRef}
								autoComplete="off"
								onChange={(e) => setFirstName(e.target.value)}
								/* value={first_name} */
								required
								aria-invalid={validFirstName ? "false" : "true"}
								aria-describedby="fnamenote"
								onFocus={() => setFirstNameFocus(true)}
								onBlur={() => setFirstNameFocus(false)}
								note={<WORD_FIELD_INFO />}
								pattern={USER_REGEX.source}
								showNote={firstNameFocus && first_name && !validFirstName}
							/>
							<InputField2
								type={"text"}
								id={"lastname"}
								label={{ label: "Last Name", className: "  text-nowrap font-sky-500" }}
								autoComplete="off"
								onChange={(e) => setLastName(e.target.value)}
								value={last_name}
								required
								aria-invalid={validLastName ? "false" : "true"}
								aria-describedby="lnamenote"
								onFocus={() => setLastNameFocus(true)}
								onBlur={() => setLastNameFocus(false)}
								note={<WORD_FIELD_INFO />}
								pattern={EMAIL_REGEX.source}
								showNote={lastNameFocus && last_name && !validLastName}
							/>
							<InputField2
								type={"text"}
								id={"city"}
								label={{ label: "City", className: "  text-nowrap font-sky-500" }}
								autoComplete="off"
								onChange={(e) => setCity(e.target.value)}
								value={city}
								required
								aria-invalid={validCity ? "false" : "true"}
								aria-describedby="citynote"
								onFocus={() => setCityFocus(true)}
								onBlur={() => setCityFocus(false)}
								pattern={NAME_REGEX.source}
								note={<WORD_FIELD_INFO />}
								showNote={cityFocus && city && !validCity}
							/>
							<InputField2
								type={"text"}
								id={"country"}
								label={{ label: "Country", className: "  text-nowrap font-sky-500" }}
								autoComplete="off"
								onChange={(e) => setCountry(e.target.value)}
								value={country}
								required
								aria-invalid={validCountry ? "false" : "true"}
								aria-describedby="countrynote"
								onFocus={() => setCountryFocus(true)}
								onBlur={() => setCountryFocus(false)}
								pattern={NAME_REGEX.source}
								note={<WORD_FIELD_INFO />}
								showNote={countryFocus && country && !validCountry}
							/>
							<InputField2
								type={"text"}
								id={"phonenumber"}
								label={{ label: "Phone Number", className: "  text-nowrap font-sky-500" }}
								autoComplete="off"
								onChange={(e) => setPhoneNumber(e.target.value)}
								value={phone_number}
								required
								aria-invalid={validPhoneNumber ? "false" : "true"}
								aria-describedby="pnnote"
								onFocus={() => setPhoneNumberFocus(true)}
								onBlur={() => setPhoneNumberFocus(false)}
								pattern={PHONE_REGEX.source}
								showNote={phoneNumberFocus && phone_number && !validPhoneNumber}
								note={<PHONE_FIELD_INFO error={validPhoneNumber} />}
							/>
							<InputField2
								type={"email"}
								id={"email"}
								label={{ label: "Email", className: "  text-nowrap font-sky-500" }}
								autoComplete="off"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
								aria-invalid={validEmail ? "false" : "true"}
								aria-describedby="emailnote"
								onFocus={() => setEmailFocus(true)}
								onBlur={() => setEmailFocus(false)}
								pattern={EMAIL_REGEX.source}
								showNote={emailFocus && email && !validEmail}
								note="Invalid Email"
							/>
							<InputField2
								label={{ label: "Password", className: "font-sky-500" }}
								type={showPwd ? "text" : "password"}
								id={"password"}
								onChange={(e) => setPwd(e.target.value)}


								required
								aria-invalid={validPwd ? "false" : "true"}
								aria-describedby="pwdnote"
								onFocus={() => setPwdFocus(true)}
								onBlur={() => setPwdFocus(false)}
								note={<PWD_FIELD_INFO />}
								showNote={PwdFocus && !validPwd}
								// onClick={() => setShowPwd(!showPwd)}
								rightIcon={showPwd ? <RiEyeLine onClick={() => setShowPwd(!showPwd)} /> : <RiEyeCloseFill onClick={() => setShowPwd(!showPwd)} />}
							/>
							<InputField2
								label={{ label: " Confirm Password", className: "font-sky-500" }}
								type={"password"}
								id={"confirmpwd"}
								onChange={(e) => setMatchPwd(e.target.value)}
								value={matchPwd}
								required
								aria-invalid={validMatch ? "false" : "true"}
								aria-describedby="pwdnote"
								onFocus={() => setMatchFocus(true)}
								onBlur={() => setMatchFocus(false)}
								note={"Must match the first password input field."}
								showNote={matchFocus && !validMatch}
							/>
							<fieldset>

							</fieldset>
							<fieldset className=''>
								<label htmlFor="bio" className='text-nowrap block font-[500]'>Bio (optional)</label>
								<textarea className='my-auto   rounded-md disabled:ml-2 p-2' name="bio" id="bio" placeholder='Tell us a little about yourself' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>

							</fieldset>
							{radioGroup && (
								<fieldset className={radioGroup.className}>
									<legend >{radioGroup.label}</legend>
									<div className={radioGroup.optionsClassName}>
										<GenerateComponents componentType={RadioOptions} data={radioGroup.options} />
									</div>
								</fieldset>
							)}



							<button className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' >Sign Up</button>



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
