import React from 'react';
import {Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { setErrorAction, setRemoveErrAction } from '../../actions/ui';

import useForm from '../../hooks/useForm';
import validator from 'validator';



const RegistrerScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui);

    const [ valueForm, handleInput] = useForm({
        name: 'Diego',
        email: 'Diego@gmail.com',
        password: '123456',
        password2: '123456'
    });
    const{ name, email, password, password2} = valueForm;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
             dispatch(startRegisterWithEmailPassword(email, password, name));
             console.log(`Registrado ${name}`);
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispatch(setErrorAction('falta el nombre'));
            return false
        } else if ( !validator.isEmail( email) ) {
            dispatch(setErrorAction('falta el email'));
            return false
        } else if ( password !== password2 || password.length < 5){
            dispatch(setErrorAction('password incorrecta'));
            return false
        }
        dispatch(setRemoveErrAction());

        return true
    }

    return (
        <>
        <h3 className="auth_title">Registrer</h3>

        <form onSubmit={handleRegister}>

            {
                msgError &&
                    (
                        <div className="auth_alert-error">
                            {msgError}
                         </div>
                        
                    )

            }

            <input 
                type="text"
                placeholder="Name"
                name="name"
                className="auth_input"
                autoComplete="off"
                value={name}
                onChange={handleInput}
            />
             <input 
                type="email"
                placeholder="Email"
                name="email"
                className="auth_input"
                value={email}
                onChange={handleInput}
            />
            <input 
                type="password"
                placeholder="Password"
                name="password"
                className="auth_input"
                value={password}
                onChange={handleInput}
            />
             <input 
                type="password"
                placeholder="Password confirm"
                name="password2"
                className="auth_input"
                value={password2}
                onChange={handleInput}
            />
            <button
                type="submit"
                className="btn btn-primary btn-block"
            >
                Registrer
            </button>

            <hr/>
        

            <Link className="link mt-5" to="/auth/registrer">
               Alredy registred?
            </Link>
        </form>
    </>
    );
};

export default RegistrerScreen;