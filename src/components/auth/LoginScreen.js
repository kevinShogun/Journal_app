import React from "react";
import { useDispatch } from "react-redux";
import  {Link}  from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login } from "../actions/auth";

export const LoginScreen = () => {

	const dispatch = useDispatch();

	const [ formValues, handleInputChange] = useForm({
		email: 'gkevinyamil@gmail.com',
		password: '132465'
	});

	const {email, password} = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login(12456, 'Kevin Yamil'));
		
	}
	return (
		<>
			<h3 className="auth__title">Login</h3>
			<img
			className="auth__icon-user"
			src={`../assets/login.png`}
			alt="google button"
		/>
			<form onSubmit = {handleLogin}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					value={email}
					onChange = {handleInputChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange = {handleInputChange}

				/>

				<button type="submit"
				className='btn btn-primary'	>
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks</p>

					<div className="google-btn">
						<div className="google-wrapper">
							<img
								className="google-icon"
								src={`../assets/buscar.png`}
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register" className="link">
					Create new account
				</Link>
			</form>
		</>
	);
};
