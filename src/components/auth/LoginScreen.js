import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { starLoging, googleLogin} from '../../actions/auth';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.ui);

    const [ formValues, handleInputChange] = useForm({
        email: 'elDiego@hotmail.com',
        password: '1234'
    });

    const { email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(starLoging(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    }

    return (
        <>
            <h3 className="auth_title">Login</h3>

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth_input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                 <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth_input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>

                <hr/>
            
                <div
                    className="auth_social-networks"
                    onClick={handleGoogleLogin}
                >
                    <p>Login with social networks</p>

                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/registrer">
                    Create new acount
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;