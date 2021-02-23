import React from 'react';

// Form
import useForm from '../hooks/useForm';
import schema from '../validation/stepSchema';

// RTK
import { useDispatch, useSelector } from 'react-redux';
import { sendStep } from '../store/app';

// Components
import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react';

import LinkButton from './LinkButton';
import CustomNumberInput from './CustomNumberInput';

const initialFormValues = {
    stepName: "",
    stepNumber: 0,
    postId: 0
}

// formValues state needs to be converted to snake case in redux action

function StepForm() {
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.app);

    // EVENT HANDLERS //
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        dispatch(sendStep({ ...formValues }));
    }

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" borderRadius="8px">
                <FormControl isRequired isInvalid={formErrors.stepName.length > 0 ? true : false}>
                    <FormLabel htmlFor="stepName">Step</FormLabel>
                    <Input name="stepName" value={formValues.stepName} onChange={onChange} id="stepName" placeholder="On the keyboard, type 'GME to the Moon'" />
                    <FormErrorMessage fontSize="md">{formErrors.stepName}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.stepNumber.length > 0 ? true : false}>
                    <FormLabel htmlFor="stepNumber">Step Number</FormLabel>
                    <CustomNumberInput name="stepNumber" value={formValues.stepNumber} onChangeHandler={onChange} min={1} defaultValue={1} />
                    <FormErrorMessage fontSize="md">{formErrors.stepNumber}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.postId.length > 0 ? true : false}>
                    <FormLabel htmlFor="postId">Associated Post's ID</FormLabel>
                    <CustomNumberInput name="postId" value={formValues.postId} onChangeHandler={onChange} min={1} defaultValue={1} />
                    <FormErrorMessage fontSize="md">{formErrors.postId}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={true}>
                    <FormErrorMessage fontSize="md">{error}</FormErrorMessage>
                </FormControl>
                <Center paddingY="15px">
                    <LinkButton
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Submit
                    </LinkButton>
                </Center>
            </Stack>
        </form>
    )
}

export default StepForm
