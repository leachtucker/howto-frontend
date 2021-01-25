import React from 'react';

import {
    Box,
    Flex,
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

function Nav(props) {
    return (
        <Box borderTopRadius="7px" bgColor="#F7F7F7" borderBottom="1px solid gainsboro">
            <Flex margin="0 auto" width="70%" maxWidth="500px" paddingY="10px" justifyContent="space-evenly">
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">Feed</LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">New Post</LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">Settings</LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">Logout</LinkButton>
            </Flex>
        </Box>
    )
}

export default Nav;
