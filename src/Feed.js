import React from 'react';

import {
    Box,
    Center,
    Stack,
    Heading
} from '@chakra-ui/react';

import PostList from './PostList';

import dummyData from './dummy_data/index';


function Feed(props) {
    return (
        <Box paddingY="8px">
            <Center marginBottom="8px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Posts</Heading>
            </Center>
            <Stack borderBottom="1px solid gainsboro">
                <PostList posts={dummyData.posts} />
            </Stack>
        </Box>
    )
}

export default Feed;