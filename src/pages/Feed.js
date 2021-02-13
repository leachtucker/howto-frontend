import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../store/app';

import PostList from '../components/PostList';
import {
    Box,
    Center,
    Stack,
    Heading
} from '@chakra-ui/react';


function Feed() {
    const { posts } = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <Box>
            <Center padding="16px">
                <Heading as="h2" fontSize="2.5rem" fontWeight="300">Posts</Heading>
            </Center>
            <Stack borderBottom="1px solid gainsboro" spacing="0">
                <PostList posts={posts} />
            </Stack>
        </Box>
    )
}

export default Feed;