import React, { useContext, useEffect, useState, useRef } from 'react'
import { InputField2 } from './Primitives'
import { AiFillInfoCircle } from "react-icons/ai";
import { RiCloseCircleFill, RiEyeCloseFill, RiEyeLine, RiSearchLine } from "react-icons/ri";
/* import axios from '../apiConfig' */
import AuthContext from '../context/AuthProvider'
import axios, { Axios } from 'axios';

const LOGIN_URL = 'http://localhost:5000/api/v1/tutor/login/'
const API_BASE_URL = 'http://localhost:5000/api/v1'


const Login = () => {
	const { setAuth } = useContext(AuthContext)
	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [passwd, setPasswd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
	const [showPasswd, setShowPasswd] = useState(false)

	useEffect(() => {
		emailRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [email, passwd])
	const handleSignIn = (e) => {
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
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			/* const url = (LOGIN_URL, JSON.stringify({ email, passwd })) */
			const url = `${LOGIN_URL}${email}/${passwd}`;

			console.log(url)
			const response = await axios.get(url)
			console.log(JSON.stringify(response?.data));
			console.log(response.data.id)
			console.log(response.data.first_name)
			console.log(JSON.stringify(response?.data));
			setAuth({ email, passwd });

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
			errRef.current.focus();

		}


		setEmail('')
		setPasswd('')
		setSuccess(true)

	}



	return (
		<>
			{success ? (
				<section className='mx-auto border bg-pink-200'>
					<h1>Success!</h1>
					<p>
						<a href="#">Sign In</a>
					</p>
				</section>
			) : (
				<section className='flex font-worksans flex-col border mx-auto justify-center  p-8 rounded-md gap-2'>
					<p ref={errRef} className={errMsg ? "errmsg" : "sr-only"} aria-live="assertive">{errMsg}</p>

					<form className='mx-auto border border-slate-200 p-8 ' onSubmit={handleSignIn}>
						<h1 className='text-center text-3xl font-bold font-roboto mb-10'>Sign In</h1>
						<InputField2
							type={"text"}
							id={"email"}
							label={{ label: "email", className: "font-sky-500" }}
							myRef={emailRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required

						/>

						<InputField2
							label={{ label: "Password", className: "font-sky-500" }}
							type={showPasswd ? "text" : "password"}
							id={"password"}
							onChange={(e) => setPasswd(e.target.value)}
							value={passwd}
							required
							rightIcon={showPasswd ? <RiEyeLine onClick={() => setShowPasswd(!showPasswd)} /> : <RiEyeCloseFill onClick={() => setShowPasswd(!showPasswd)} />}
						/>

						<button className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' >Sign In</button>



					</form>


				</section>

			)}</>)
}

export default Login
