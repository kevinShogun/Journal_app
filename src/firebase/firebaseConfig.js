import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

///poner la cadena de conexion
const firebaseConfig = {
    apiKey: "AIzaSyBwCY_s7RDcl8ha_7IwiI5tEdArxV8pwU0",
    authDomain: "react-apps-8a09f.firebaseapp.com",
    projectId: "react-apps-8a09f",
    storageBucket: "react-apps-8a09f.appspot.com",
    messagingSenderId: "770071996176",
    appId: "1:770071996176:web:1f184f3143714d74cce795",
    measurementId: "G-JQ7YGS722C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
    
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export{
    db,
    googleAuthProvider,
    githubAuthProvider,
    firebase
}