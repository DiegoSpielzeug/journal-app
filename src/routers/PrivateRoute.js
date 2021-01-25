import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    ...res
}) => {
    return (
        <Route {...res}
            component={ props => (
                (isLoggedIn)
                ?<Component {...props}/>
                :<Redirect to='/auth/login'/>
            )}
        />
    );
};

PrivateRoute.prototype = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;