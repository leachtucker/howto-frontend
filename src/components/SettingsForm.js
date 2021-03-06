import React, { useEffect } from 'react';

import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

import useForm from '../hooks/useForm';
import schema from '../validation/signupSchema';

const initialFormValues = {
    email: "",
    username: "",
    password: ""
};

function SettingsForm() {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);

    // EVENT HANDLERS //
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data

    }

    // Runs on component mount
    useEffect(() => {
        // Make call to API to fetch user data and then set that data to the form state
    }, []);

    return (
        <form onSubmit={onSubmit}>
             <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" borderRadius="8px">
                <FormControl isRequired isInvalid={formErrors.email.length > 0 ? true : false}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input name="email" value={formValues.email} onChange={onChange} id="email" placeholder="Email" />
                    <FormErrorMessage fontSize="md">{formErrors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.username.length > 0 ? true : false}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input name="username" value={formValues.username} onChange={onChange} id="username" placeholder="Username" />
                    <FormErrorMessage fontSize="md">{formErrors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.password.length > 0 ? true : false}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input name="password" value={formValues.password} onChange={onChange} id="password" placeholder="Password" />
                    <FormErrorMessage fontSize="md">{formErrors.password}</FormErrorMessage>
                </FormControl>
                <Center paddingY="15px">
                    <LinkButton
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Update
                    </LinkButton>
                </Center>
            </Stack>
        </form>
    )
}

export default SettingsForm;
