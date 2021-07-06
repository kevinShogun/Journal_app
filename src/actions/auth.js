import Swal from "sweetalert2";
import {
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { notesLogout } from "./notes";
import { finishLoading, startLoading } from "./ui";

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithRedirect(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};

export const startGitHubLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};

export const startRegisterWhitEmailPassword = (email, password, name) => {
	let band = false;
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)

			.then(async ({ user }) => {
				console.log(user);

				await user.updateProfile({ displayName: name });

				dispatch(login(user.uid, user.displayName));

				dispatch(finishLoading());
				console.log(user);
				console.log(band);
			})
			.then(function () {
				verifyEmial();
				dispatch(startLoading());
			})
			.catch((e) => {
				console.log(e);
				Swal.fire("Error", e.message, "error");
				dispatch(finishLoading());
			});
	};
};

/*** Verifica si el Email Existe o NO */
const verifyEmial = () => {
	const user = firebase.auth().currentUser;

	user
		.sendEmailVerification()
		.then(function () {
			console.log("verificado");

			return true;
		})
		.catch(function (error) {
			console.log(error);
			return false;
		});
};

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				console.log(user);
				dispatch(finishLoading());
			})
			.catch((e) => {
				console.log(e);
				dispatch(finishLoading());
			});
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName,
		},
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());

		dispatch(notesLogout());
	};
};

export const logout = () => {
	return {
		type: types.logout,
	};
};
