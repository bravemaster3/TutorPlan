import React, { useEffect, useState, useRef } from 'react'
import { GenerateComponents, InputField2, Modal, RadioOptions, TempForm } from './Primitives'
import { RiCloseCircleFill, RiEyeCloseFill, RiEyeLine, RiSearchLine } from "react-icons/ri";
import axios from '../apiConfig'
import md5 from 'md5'
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Register from './Register';


const Login = () => {
	const [role, setRole] = useState('student')
	const LOGIN_URL = `/${role}/login`
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/'


	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [passwd, setPasswd] = useState('');

	const [errMsg, setErrMsg] = useState('');
	const [showPasswd, setShowPasswd] = useState(false)
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

	useEffect(() => {
		//emailRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [email, passwd])
/* 	const handleSignIn = (e) => {
		e.preventDefault()

		const url = `${API_BASE_URL}/tutor/login/${email}/${passwd}`
		console.log(url)
		axios
			.get(url)
			.then((response) => {
				console.log("data found")
				console.log(JSON.stringify(response?.data));


			})
			.catch((error) => alert("wrong username, password or account type"))
	} */

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			/* const url = (LOGIN_URL, JSON.stringify({ email, passwd })) */
			/* const response = await axios.post(LOGIN_URL,
				JSON.stringify({ email, passwd }),
				{
					headers: { 'Content-Type': 'application/json' }
				}
			); */
			//Add
			/* const url = `${LOGIN_URL}/${email}/${passwd}`;
			const response = await axios.get(url) */
			//console.log(response.data)

			//Remove
			/* console.log(JSON.stringify(response?.data));
			console.log(response?.data); */
			//Example response
			/* { "__class__": "Tutor", "bio": null, "city": "Nairobi", "country": "Kenya", "created_at": "2024-03-16T07:14:48", "email": "pesh@gmail.com", "first_name": "Pesh", "id": "74604fc1-6477-43c5-8f0a-1335389d01db", "last_name": "Test", "phone_number": "0722345678", "updated_at": "2024-03-16T07:14:48" } */
			const response = {
				data: {
					city
						:
						"Nairobi",
					country
						:
						"Kenya",
					created_at
						:
						"2024-03-25T01:26:02",
					email
						:
						"ptest@gmail.com",
					first_name
						:
						"Patience",
					id
						:
						"ccbc40f5-3fa3-416a-baca-435749f6b84d", // student-id ccbc40f5-3fa3-416a-baca-435749f6b84d tutor-id eae09725-66bc-4e9a-b2c3-3a9b13ce946e
					last_name
						:
						"Otuke",
					phone_number
						:
						"0987654321",
					updated_at
						:
						"2024-04-03T15:06:18",
					__class__
						:
						"Student"
				}
			}
			// console.log("Success")
			//console.log(response.data)
			// console.log(response.data.first_name)
			// console.log(response.data.__class__)
			// console.log(JSON.stringify(response?.data));
			const roles = response.data.__class__.toLowerCase()


			const userData = (response.data)

			/* console.log(userData, roles) */
			setAuth({ userData, roles });

			setEmail('')
			setPasswd('')
			navigate(from, { replace: true })


		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server response')
			} else if (err.response?.status === 400) {
				setErrMsg('Missing email or Password')
			}
			else if (err.response?.status === 401) {
				setErrMsg('Unauthorised')
			} else {
				setErrMsg('Login Failed')
			}
			console.log(err)
			errRef.current.focus();
		}

	}



	return (


		<>
			<section className='flex p-8'>

				<TempForm
				/* handleSubmit={handleSubmit}  */ children={<>
						<p ref={errRef} className={errMsg ? "text-red-500 block font-bold text-3xl text-center" : "sr-only"} aria-live="assertive">{errMsg}</p>
						<h1 className='text-center text-[40px] font-bold font-roboto mb-1'>Welcome Back!</h1>
						<h2 className=' font-roboto text-center mb-6 font-[500]'>You are logging in as a {role} </h2>
						<InputField2
							type={"text"}
							id={"email"}
					label={{ label: "Email", className: "font-sky-500" }}
							myRef={emailRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							required

						/>

						<InputField2
							label={{ label: "Password", className: "font-sky-500" }}
							type={showPasswd ? "text" : "password"}
							id={"password"}
							onChange={(e) => setPasswd(md5(e.target.value))}


							required
							rightIcon={showPasswd ? <RiEyeLine onClick={() => setShowPasswd(!showPasswd)} /> : <RiEyeCloseFill onClick={() => setShowPasswd(!showPasswd)} />}
						/>
						{radioGroup && (
							<fieldset className={radioGroup.className}>
								<legend >{radioGroup.label}</legend>
								<div className={radioGroup.optionsClassName}>
									<GenerateComponents componentType={RadioOptions} data={radioGroup.options} />
								</div>
							</fieldset>
						)}

						<button onClick={handleSubmit} className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' >Sign In</button>
						<span>New to TutorPlan? <Link to={"/sign-up"} className='underline'>Create Account</Link></span></>
					} />

				{/* <form className='mx-auto border bg-green-600 border-slate-200 p-8 ' onSubmit={handleSubmit}>
				<h1 className='text-center text-3xl font-bold font-roboto mb-1'>Welcome back!</h1>
				<h2 className=' font-roboto text-center mb-6 font-[500]'>You are logging in as a {role} </h2>
						<InputField2
							type={"text"}
							id={"email"}
					label={{ label: "Email", className: "font-sky-500" }}
							myRef={emailRef}
							autoComplete="off"
								onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<InputField2
							label={{ label: "Password", className: "font-sky-500" }}
							type={showPasswd ? "text" : "password"}
							id={"password"}
								onChange={(e) => setPasswd(md5(e.target.value))}
							required
							rightIcon={showPasswd ? <RiEyeLine onClick={() => setShowPasswd(!showPasswd)} /> : <RiEyeCloseFill onClick={() => setShowPasswd(!showPasswd)} />}
						/>
				{radioGroup && (
					<fieldset className={radioGroup.className}>
						<legend >{radioGroup.label}</legend>
						<div className={radioGroup.optionsClassName}>
							<GenerateComponents componentType={RadioOptions} data={radioGroup.options} />
						</div>
					</fieldset>
				)}

				<button className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' >Sign In</button>
			</form> */}
			</section>
		</>


	)
}

export default Login

{/* < section className = 'flex font-worksans flex-col border mx-auto justify-center  p-8 rounded-md gap-2' > */ }
