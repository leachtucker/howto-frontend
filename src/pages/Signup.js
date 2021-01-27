import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import SignupForm from '../components/SignupForm';

function Signup() {
    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Sign up</Heading>
            </Center>
            <SignupForm />
        </Box>
    )
}

export default Signup;
