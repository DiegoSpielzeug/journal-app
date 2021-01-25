import { types } from '../types/types';

export const setErrorAction = (err) => {
    return{
        type: types.uiSetError,
        payload: err
    }
};
export const setRemoveErrAction = () => {
    return{
        type: types.uiRemoveError
    }
};
