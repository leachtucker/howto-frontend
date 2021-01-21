import React from 'react'

import {
    Box,
    Center,
    Flex,
    Stack,
    Image,
    Heading,
    Text,
    List,
    ListItem,
    Spacer
} from '@chakra-ui/react';

function Post(props) {
    console.log(props);
    return (
        <Box minHeight="350px">
            <Box width="50%" height="100%" display="inline-block">
                <Flex flexDirection="column" alignItems="center" height="100%">
                    <Heading as="h3" size="xl">How To Tie Your Shoes</Heading>
                    <Box maxWidth="300px" textAlign="center" marginBottom="20px">
                        <Text>Tying your shoes can be hard sometimes. Get tips from an expert!</Text>
                    </Box>
                    <Box bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="1rem">
                        <Heading as="h4" size="lg" marginBottom="10px">Materials Needed:</Heading>
                        <List textAlign="center" spacing="5px">
                            <ListItem>
                                <Text fontSize="lg">1. Shoes</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="lg">2. Agile Fingers</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="lg">3. Discipline</Text>
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
            </Box>
            <Box width="50%" display="inline-block" >
                <Box bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="1rem">
                    <Heading as="h4" size="lg">Instructions:</Heading>
                </Box>
            </Box>
        </Box>
    )
}

export default Post
