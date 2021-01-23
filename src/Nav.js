import React from 'react';

import {
    Box,
    Flex,
    Spacer
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

function Nav(props) {
    return (
        <Box borderTopRadius="7px" bgColor="#F7F7F7" borderBottom="1px solid gainsboro">
            <Flex margin="0 auto" width="70%" maxWidth="500px" paddingY="10px" shrink>
                <LinkButton minWidth="20%" fontSize="1.25rem" >Feed</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%" fontSize="1.25rem">New Post</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%" fontSize="1.25rem">Settings</LinkButton>
                <Spacer />
                <LinkButton minWidth="20%" fontSize="1.25rem">Logout</LinkButton>
            </Flex>
        </Box>
    )
}

export default Nav;
