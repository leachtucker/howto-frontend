import React from 'react';

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

function SignupForm(props) {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);

    // EVENT HANDLERS //
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data

    }

    return (
        <form onSubmit={onSubmit}>
             <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" border="1px solid gainsboro" borderRadius="8px" padding="1rem" marginBottom="20px">
                <FormControl isRequired isInvalid={formErrors.email.length > 0 ? true : false}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input name="email" value={formValues.email} onChange={onChange} id="email" placeholder="Email" />
                    <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.username.length > 0 ? true : false}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input name="username" value={formValues.username} onChange={onChange} id="username" placeholder="Username" />
                    <FormErrorMessage>{formErrors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.password.length > 0 ? true : false}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input name="password" value={formValues.password} onChange={onChange} id="password" placeholder="Password" />
                    <FormErrorMessage>{formErrors.password}</FormErrorMessage>
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
