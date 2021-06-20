import {firebase, githubAuthProvider, googleAuthProvider} from "../firebase/firebaseConfig";
import { types } from "../types/types"


export const startGoogleLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( userCred =>{
            console.log(userCred);
        });
    }
}


export const startGitHubLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(githubAuthProvider)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}


export const startLoginEmailPassword = (email, password) =>{
    return(dispatch) => {
        setTimeout(() => {
            dispatch(
                login(123, 'pedro')
            );
        }, 3500);
    }

}

export const login = (uid, displayName) =>{
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}