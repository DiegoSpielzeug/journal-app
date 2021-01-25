import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import {firebase} from '../firebase/firebase-config';

//star login whit email and password
export const starLoging = (email, password) => {
    return (dispatch) => {
        dispatch(startLoginEmailPassword());
        
       firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {
                
                dispatch(login(user.uid, user.displayName));
                dispatch(finisLoading());
                
            })
            .catch( error => {
                console.log(error.code);
                console.log(error.message);
            })

    }
}

///google login
export const googleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch( error => {
                console.log(error.code);
                console.log(error.message);
            })
    }
}
///register whit email and password
export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {

           await  user.updateProfile({displayName: name})
            dispatch(login(user.uid, user.displayName));
        })
        .catch( error => {
            console.log(error.code);
            console.log(error.message);
        })
    }
}

//dispatch normal
export const login = (uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLoginEmailPassword = () => {
    return{
        type: types.uiStartLoading
    }
}
export const finisLoading = () => {
    return{
        type: types.uiFinishLoading
    }
}

export const startLogout = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then()
        dispatch(logout());
    }
}

export const logout = () => {
    return{
        type: types.logout
    }
}
