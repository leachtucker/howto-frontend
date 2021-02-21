import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

import PostForm from '../components/PostForm';

function NewPost() {
    return (
        <Box>
            <Center padding="16px" borderBottom="1px solid gainsboro">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">New Post</Heading>
            </Center>
            <Box paddingY="20px">
                <PostForm />
            </Box>
        </Box>
    )
}

export default NewPost;
