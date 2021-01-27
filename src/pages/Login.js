import React from 'react';
import LoginForm from '../components/LoginForm';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

function Login() {
    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Login</Heading>
            </Center>
            <LoginForm />
         </Box>
    )
}

export default Login;
