import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
	return (
		<>
			<h3 className="auth__title">Register</h3>
            <img
			className="auth__icon-user"
			src={`../assets/password.svg`}
			alt="google button"
		/>
			<form>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
				/>
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

				<input
					type="password"
					placeholder="Confirm"
					name="confirm"
					className="auth__input"
				/>

				<button type="submit" className="btn btn-primary mb-5 mb-5">
					Register
				</button>
				<br />

				<Link to="/auth/login" className="link mb-5">
					Alredy Registered?
				</Link>
			</form>
		</>
	);
};
