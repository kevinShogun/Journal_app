import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
	return (
		<>
			<h3 className="auth__title">Login</h3>
			<img
			className="auth__icon-user"
			src={`../assets/login.png`}
			alt="google button"
		/>
			<form>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
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
