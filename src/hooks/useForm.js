import { useState, useEffect } from "react";
import * as yup from 'yup';

function useForm(initialValues, schema = null) {
    const [ formValues, setFormValues ] = useState(() => initialValues);
    const [ formErrors, setFormErrors ] = useState(() => initialValues);
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(() => true);

    // EVENT HANDLERS //
    function onChange(e) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });

        // Only validate if a schema was provided
        if (schema) {
            validate(name, value);
        }
    }

    // HELPERS //
    function validate(name, value) {
        yup.reach(schema, name)
            .validate(value)
                .then(() => {
                    setFormErrors({
                        ...formErrors,
                        [name]: ""
                    })
                })
                .catch(err => {
                    setFormErrors({
                        ...formErrors,
                        [name]: err.errors[0]
                    })
                })
    }

    // SIDE EFFECTS //
    useEffect(() => {
        // Only validate if a schema was provided
        if (schema) {
            schema.isValid(formValues)
                .then(valid => {
                    setIsButtonDisabled(!valid);
                })
        }
    }, [ formValues, schema ]);

    return [
        formValues,
        formErrors,
        isButtonDisabled,
        onChange,
    ]
}

export default useForm;