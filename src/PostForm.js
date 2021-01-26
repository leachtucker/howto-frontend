import React, { useState, useEffect } from 'react';

import * as yup from 'yup';

import {
    Box,
    Stack,
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
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

    // EVENT HANDLERS //
    function onChange(e) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });

        validate(name, value);
    }

    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data

    }

    // HELPERS //
    function validate(name, value) {
        yup.reach(schema, name)
            .validate(value)
                .then(() => {
                    setFormErrors({
                        ...formErrors,
                        [name]: ""
                    })
                })
                .catch(err => {
                    setFormErrors({
                        ...formErrors,
                        [name]: err.errors[0]
                    })
                })
    }

    // SIDE EFFECTS //
    useEffect(() => {
        schema.isValid(formValues)
            .then(valid => {
                setIsButtonDisabled(!valid);
            })
    }, [ formValues ])

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" border="1px solid gainsboro" borderRadius="8px" padding="1rem" marginBottom="20px">
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
                <Center>
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
