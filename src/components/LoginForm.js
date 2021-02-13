import React from 'react';
import { useHistory } from 'react-router-dom';

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

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/app';

const initialFormValues = {
    username: "",
    password: ""
}

function LoginForm() {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.app);
    const { push } = useHistory();

    // EVENT HANDLERS
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        const { username, password } = formValues;
        dispatch(login({username, password}, push));
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
                    <Input name="password" type="password" value={formValues.password} onChange={onChange} id="password" placeholder="Password" />
                    <FormErrorMessage fontSize="md">{formErrors.password}</FormErrorMessage>
                </FormControl>
                <FormControl textAlign="center" borderTop="1px solid gainsboro" isInvalid={true}>
                    <FormErrorMessage display="inline-block" fontSize="md">{error}</FormErrorMessage>
                </FormControl>
                <Center paddingY="15px">
                    <LinkButton
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Login
                    </LinkButton>
                </Center>
            </Stack>
        </form>
    )
}

export default LoginForm;
