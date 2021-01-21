import React from 'react';

import {
    Box,
    Flex,
    Spacer
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

function Nav() {
    return (
        <Box borderTopRadius="7px" bgColor="#F7F7F7">
            <Flex margin="0 auto" width="70%" maxWidth="500px" paddingY="10px" shrink>
                <LinkButton minWidth="20%" >Feed</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%">New Post</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%">Settings</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%">Logout</LinkButton>
            </Flex>
        </Box>
    )
}

export default Nav;
