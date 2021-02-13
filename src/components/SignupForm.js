import React, { useState } from 'react';

import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

import useForm from '../hooks/useForm';
import schema from '../validation/signupSchema';

import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const initialFormValues = {
    username: "",
    password: ""
};

function SignupForm(props) {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const [ error, setError ] = useState("");
    const history = useHistory();

    const toast = useToast();

    // EVENT HANDLERS //
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        axiosWithAuth().post('/api/auth/register', { username: formValues.username, password: formValues.password })
            .then(() => {
                history.push('/login');
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch(err => {
                if (err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    toast({
                        title: "Internal Error.",
                        description: "We're having some problems on our side. Please try again",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            })
    }

    return (
        <form onSubmit={onSubmit}>
             <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" border="1px solid gainsboro" borderRadius="8px" padding="1rem" marginBottom="20px">
                <FormControl isRequired isInvalid={formErrors.username.length > 0 ? true : false}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input name="username" value={formValues.username} onChange={onChange} id="username" placeholder="Username" />
                    <FormErrorMessage fontSize="md">{formErrors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.password.length > 0 ? true : false}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type="password" name="password" value={formValues.password} onChange={onChange} id="password" placeholder="Password" />
                    <FormErrorMessage fontSize="md">{formErrors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={true} borderTop="1px solid gainsboro" textAlign="center">
                    <FormErrorMessage display="inline-block" fontSize="md">{error}</FormErrorMessage>
                </FormControl>
                <Center paddingY="15px">
                    <LinkButton
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Register
                    </LinkButton>
                </Center>
            </Stack>
        </form>
    )
}

export default SignupForm;
