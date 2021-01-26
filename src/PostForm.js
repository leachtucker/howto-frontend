import React, { useState } from 'react';

import {
    Box,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea
} from '@chakra-ui/react';

import LinkButton from './LinkButton';

import schema from './formSchema';

const initialFormValues = {
    title: "",
    description: "",
    materials: "",
    videoURL: ""
}

const initialFormErrors = {
    ...initialFormValues
}

function PostForm() {
    // SLICES OF STATE //
    const [ formValues, setFormValues ] = useState(initialFormValues);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);

    // EVENT HANDLERS //
    function onChange(e) {
        // VALIDATE
        validate();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data

    }

    function validate() {
        schema.validate(formValues).catch((err) => {
            console.log({...err})
            setFormErrors({
                ...formErrors,
                [err.path]: err.message
            })
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Box width="40%" minWidth="300px" margin="0 auto">
                <FormControl isRequired isInvalid={formErrors.title.length > 0 ? true : false}>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input name="title" value={formValues.title} onChange={onChange} id="title" placeholder="Title" />
                    <FormErrorMessage>{formErrors.title}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.description.length > 0 ? true : false}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea name="description" value={formValues.description} onChange={onChange} id="description" placeholder="Description" />
                    <FormErrorMessage>{formErrors.description}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.materials.length > 0 ? true : false}>
                    <FormLabel htmlFor="materials">Materials</FormLabel>
                    <Input name="materials" value={formValues.materials} onChange={onChange} id="materials" placeholder="Use space and comma (Computer, Internet, Keyboard)" />
                    <FormErrorMessage>{formErrors.materials}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formErrors.videoURL.length > 0 ? true : false}>
                    <FormLabel htmlFor="videoURL">Video</FormLabel>
                    <Input name="videoURL" value={formValues.videoURL} onChange={onChange} id="videoURL" placeholder="URL" />
                    <FormErrorMessage>{formErrors.videoURL}</FormErrorMessage>
                </FormControl>
                <Center paddingY="25px">
                    <LinkButton
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                    >
                        Submit
                    </LinkButton>
                </Center>
            </Box>
        </form>
    )
}

export default PostForm;
