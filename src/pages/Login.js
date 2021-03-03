import React from 'react';
import { Link } from 'react-router-dom';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import LinkButton from '../components/LinkButton';

import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <Box>
            <Center padding="16px" >
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Login</Heading>
            </Center>
            <LoginForm />
            <Center paddingY="20px">
                <LinkButton border="1px solid gainsboro" fontSize="1.2rem">
                    <Link to="/register">
                        Register
                    </Link>
                </LinkButton>
            </Center>
         </Box>
    )
}

export default Login;
