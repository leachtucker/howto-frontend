import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import PostForm from './PostForm';

function NewPost() {
    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">New Post</Heading>
            </Center>
            <PostForm />
        </Box>
    )
}

export default NewPost;
