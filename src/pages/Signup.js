import React from 'react';
import { Link } from 'react-router-dom';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import LinkButton from '../components/LinkButton';

import SignupForm from '../components/SignupForm';

function Signup() {
    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Sign up</Heading>
            </Center>
            <SignupForm />
            <Center>
                <LinkButton border="1px solid gainsboro" fontSize="1.2rem">
                    <Link to="/">
                        Login
                    </Link>
                </LinkButton>
            </Center>
        </Box>
    )
}

export default Signup;
