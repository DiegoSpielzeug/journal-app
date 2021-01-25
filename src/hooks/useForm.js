import {useState} from 'react';

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInput = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    }

    const reset = () => {
        setValues(initialState);
    }

    return [values, handleInput, reset]
};

export default useForm;