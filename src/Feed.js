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
                <Heading as="h2" size="xl" color="gray.700">Posts</Heading>
            </Center>
            <Stack>
                <PostList posts={dummyData.posts} />
            </Stack>
        </Box>
    )
}

export default Feed;