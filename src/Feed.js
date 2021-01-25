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
        <Box>
            <Center padding="8px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Posts</Heading>
            </Center>
            <Stack borderBottom="1px solid gainsboro" spacing="0">
                <PostList posts={dummyData.posts} />
            </Stack>
        </Box>
    )
}

export default Feed;