import React from 'react';
import { Redirect, Route,Switch } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegistrerScreen from '../components/auth/RegistrerScreen';

const AuthRouter = () => {
    return (
        <div className="auth_main">
            <div className="auth_box-containter">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen}/>
                    <Route path="/auth/registrer" component={RegistrerScreen}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </div>
    );
};

export default AuthRouter;