import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {firebase} from "../firebase/firebaseConfig"
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

export const AppRouter = () => {

	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	

	
		
	useEffect(() => {
		
		
		firebase.auth().onAuthStateChanged( (user) =>{
			
			const userV = firebase.auth().currentUser;

			if(user?.uid && userV.emailVerified){

				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				
			}else{

				setIsLoggedIn(false);
			}

			setChecking(false);
		})	

	}, [dispatch, setChecking]);

	

	if(checking){
		return(
			<h1>Espere...</h1>
		)
	}

	return (
			<Router>
				<div>
					<Switch>
						<PublicRoute 
                            path="/auth" 
                            component={AuthRouter} 
							isAuth={isLoggedIn} 
                        />

						<PrivateRoute 
                            exact 
                            path="/" 
                            component={JournalScreen}
							isAuth={isLoggedIn} 
                        />

					</Switch>
				</div>
			</Router>
	);
};
