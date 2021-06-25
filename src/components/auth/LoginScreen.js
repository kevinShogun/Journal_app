import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {Link}  from "react-router-dom";
import { startGitHubLogin, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

	const dispatch = useDispatch();

	const {loading } = useSelector(state => state.ui)

	const [ formValues, handleInputChange] = useForm({
		email: 'gkebin@gmail.com',
		password: '132465'
	});

	const {email, password} = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
		
	}

	const handleGithubLogin = () =>{
		dispatch(startGitHubLogin());
	}

	const handleGoogleLogin = () =>{
		dispatch(startGoogleLogin());
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

				<button 
					type="submit"
					className='btn btn-primary'
					disabled={loading}
				>
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks</p>

					<div 
						className="google-btn"
						onClick={handleGoogleLogin}
					>
						<div className="google-wrapper">
							<img
								className="google-icon"
								src={`../assets/buscar.png`}
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with Google</b>
						</p>
					</div>

					<br />
					
					<div 
						className="google-btn github"
						onClick={handleGithubLogin}
						>
						<div className="google-wrapper">
							<img
								className="google-icon"
								src={`../assets/github.png`}
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with GitHub</b>
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
