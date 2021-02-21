import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import schema from '../validation/postSchema';

import { sendPost } from '../store/app';

import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

const initialFormValues = {
    title: "",
    description: "",
    materials: "",
    video: ""
}

function PostForm() {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.app);

    // EVENT HANDLERS //
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        dispatch(sendPost({ ...formValues }));
    }

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" borderRadius="8px">
                <FormControl isRequired isInvalid={formErrors.title.length > 0 ? true : false}>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input name="title" value={formValues.title} onChange={onChange} id="title" placeholder="Title" />
                    <FormErrorMessage fontSize="md">{formErrors.title}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.description.length > 0 ? true : false}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea name="description" value={formValues.description} onChange={onChange} id="description" placeholder="Description" />
                    <FormErrorMessage fontSize="md">{formErrors.description}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.materials.length > 0 ? true : false}>
                    <FormLabel htmlFor="materials">Materials</FormLabel>
                    <Input name="materials" value={formValues.materials} onChange={onChange} id="materials" placeholder="Computer with internet access" />
                    <FormErrorMessage fontSize="md">{formErrors.materials}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formErrors.video.length > 0 ? true : false}>
                    <FormLabel htmlFor="video">Video</FormLabel>
                    <Input name="video" value={formValues.video} onChange={onChange} id="video" placeholder="URL" />
                    <FormErrorMessage fontSize="md">{formErrors.video}</FormErrorMessage>
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

export default PostForm;
