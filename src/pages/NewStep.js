import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import StepForm from '../components/StepForm';

function NewStep() {
    return (
        <Box>
            <Center padding="16px" borderBottom="1px solid gainsboro">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">New Post</Heading>
            </Center>
            <Box paddingY="20px">
                <StepForm />
            </Box>
        </Box>
    )
}

export default NewStep;
