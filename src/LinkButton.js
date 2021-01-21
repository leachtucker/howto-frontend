import React from 'react';
import { Button } from '@chakra-ui/react';


function LinkButton(props) {
    return (
        <Button {...props} bgColor="transparent" _hover={{ bgColor: "#F1F1F1" }} />
    )
}

export default LinkButton;
