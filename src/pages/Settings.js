import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import SettingsForm from '../components/SettingsForm';

function Settings(props) {
    return (
        <Box>
            <Center padding="16px" borderBottom="1px solid gainsboro">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Settings</Heading>
            </Center>
            <Box spacing="0" paddingY="20px">
                <SettingsForm />
            </Box>
        </Box>
    )
}

export default Settings;
