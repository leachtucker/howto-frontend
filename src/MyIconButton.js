import React from 'react';

import {
    IconButton
} from '@chakra-ui/react';

function MyIconButton(props) {
    return (
        <IconButton
            {...props}
            bgColor="#F7F7F7"
            fontSize="1.2rem"
            padding="1.2rem"
            _hover={{
                bgColor: "#F1F1F1"
            }}
            _focus={{
                outline: "none",
                border: "none",
            }}
        >
        </IconButton>
    )
}

export default MyIconButton;
