import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setcheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //verifica si actualmente esta logeado
    useEffect( () => {
        firebase.auth().onAuthStateChanged( (user) =>{
            
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else{
                setIsLoggedIn(false);
            }

            setcheking(false)
        } )
    },[dispatch,setcheking,])

    if (checking) {
        return (
            <h1>Verificando</h1>
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={isLoggedIn}/>
                <PrivateRoute exact path="/" component={JournalScreen} isLoggedIn={isLoggedIn}/>
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    );
};

export default AppRouter;