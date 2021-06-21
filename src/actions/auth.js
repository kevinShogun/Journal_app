import {firebase, githubAuthProvider, googleAuthProvider} from "../firebase/firebaseConfig";
import { types } from "../types/types"


export const startGoogleLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( userCred =>{
            console.log(userCred);
        }).catch( e => console.log(e));
    }
}

export const startGitHubLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(githubAuthProvider)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        }).catch( e => console.log(e));
    }
}

export const startRegisterWhitEmailPassword = (email, password, name) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) =>{
                console.log(user);

                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch( e => console.log(e));
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