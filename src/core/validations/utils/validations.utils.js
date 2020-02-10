import { useState } from 'react';

export const withForm = (validations) => {
    const formData = {}; 
    const errorsData = {};
    
    Object.keys(validations).forEach((key) => {
        formData[key] = '';
        errorsData[key] = {};
    });
    
    return (callback) => (props) => {
        let errors = {};

        const [ form, setForm ] = useState(formData);
        const [ loading, toggleLoading ] = useState(false);
        const [ validators, setValidators ] = useState(errorsData)


        const handleChange = ({ target: { name, value }}) => setForm({ ...form, [name]: value });
        
        const onSubmit = (request, callback) => () => {
            toggleLoading(true);

            if (!hasErrors()) {
                return request(form)
                    .then((data) => {
                        toggleLoading(false);

                        callback(data);
                    })
                    .catch((err) => {
                        toggleLoading(false);

                        return Promise.reject(err);
                    });
            } else {
                toggleLoading(false);
            }
        };
        
        const hasErrors = () => {
            let hasError = false;

            Object.keys(validations).forEach((key) => {
                errors = { [key]: { errors: {}, message: '' }, ...errors };
                for (const validation of validations[key]) {
                    errors[key] = { errors: { ...validation(form[key]), ...errors[key].errors }}
                }

                errors[key] = { hasError: Object.keys(errors[key].errors).length > 0, ...errors[key]};

                if (!hasError) {
                    hasError = errors[key].hasError;
                }

                if (errors[key].hasError) {
                    errors[key].message = errors[key].errors[Object.keys(errors[key].errors)[0]]
                }
            });

            setValidators(errors || errorsData);

            return hasError;
        };

        return callback({ form, setForm, loading, handleChange, onSubmit, validators, ...props});
    };
};