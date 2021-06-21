import {
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((userCred) => {
				console.log(userCred);
			})
			.catch((e) => console.log(e));
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
			.catch((e) => console.log(e));
	};
};

export const startRegisterWhitEmailPassword = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
            .then(function(){
                verifyEmial();
            })
			.then(async ({ user }) => {
				console.log(user);

				await user.updateProfile({ displayName: name });

				
					dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => console.log(e));
	};
};

/*** Verifica si el Email Existe o NO */
const verifyEmial = () => {
	const user = firebase.auth().currentUser;

	user
		.sendEmailVerification()
		.then(function () {
			console.log("verificado");
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => console.log(e));
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
