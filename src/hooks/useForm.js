import {useState} from 'react';

export const useForm = ( initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (useFormState = initialState) =>{
        setValues(useFormState);
    }

    const  handleInputChage = ({target}) => {

        setValues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values, handleInputChage, reset];
}
