import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import deleteTokenLocal from '../utils/deleteTokenLocal';

import {
    Box,
    Flex,
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

function Nav(props) {
    const history = useHistory();

    function onLogout() {
        deleteTokenLocal();
        history.go('/login');
    }

    return (
        <Box borderTopRadius="7px" bgColor="#F7F7F7" borderBottom="1px solid gainsboro">
            <Flex margin="0 auto" width="95%" maxWidth="500px" paddingY="10px" justifyContent="space-evenly">
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">
                    <Link to="/feed">
                        Feed
                    </Link>
                </LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">
                    <Link to="/newpost">
                        New Post
                    </Link>
                </LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem">
                <Link to="/settings">
                    Settings
                </Link>
                </LinkButton>
                <LinkButton flex="1" maxWidth="100px" fontSize="1.25rem" onClick={onLogout}>
                    Logout
                </LinkButton>
            </Flex>
        </Box>
    )
}

export default Nav;
