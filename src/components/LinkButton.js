import React from 'react';
import { Button } from '@chakra-ui/react';


function LinkButton(props) {
    return (
        <Button
            {...props}
            color="text.400"
            fontWeight="300"
            bgColor="transparent"
            _hover={{ bgColor: "#F1F1F1" }}
            _focus={{
                outline: "none",
                border: "none",
            }}
        />
    )
}

export default LinkButton;
