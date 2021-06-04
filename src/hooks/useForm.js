import { useState } from 'react';


export const useForm = (initialState = {}) => {
    const [values, setFormValues] = useState(initialState);

    const handleInput = ({ target }) => {
        setFormValues({ ...values, [target.name]: target.value });
    }

    const reset = () => {
        setFormValues(initialState)
    }

    return [values, handleInput, reset];
}
