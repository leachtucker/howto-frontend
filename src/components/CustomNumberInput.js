import React from 'react';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

function CustomNumberInput(props) {
    return (
        <NumberInput {...props} onChange={(valueString) => props.onChangeHandler({ target: { name: props.name, value: parseInt(valueString) } })} >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default CustomNumberInput;
