import React from 'react';

import {
    Box,
    Center,
    Stack,
    Heading
} from '@chakra-ui/react';

import SettingsForm from '../components/SettingsForm';

function Settings(props) {
    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Settings</Heading>
            </Center>
            <Stack borderBottom="1px solid gainsboro" spacing="0">
                <SettingsForm />
            </Stack>
        </Box>
    )
}

export default Settings;
