import React from 'react'

import {
    Box,
    Flex,
    Heading,
    Text,
    List,
    ListItem
} from '@chakra-ui/react';

function Post(props) {
    console.log(props);
    return (
        <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center" }}  minHeight="350px" borderTop="1px solid gainsboro" borderBottom="1px solid gainsboro" paddingY="10px">
            <Box height="100%" display="inline-block">
                <Flex flexDirection="column" alignItems="center" height="100%">
                    <Heading as="h3" size="xl" marginBottom="8px" textAlign="center">How To Tie Your Shoes</Heading>
                    <Box maxWidth="325px" textAlign="center" marginBottom="25px">
                        <Text>Tying your shoes can be hard sometimes. Get tips from an expert!</Text>
                    </Box>
                    <Box width="90%" maxWidth="350px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="2rem">
                        <Heading as="h4" size="lg" >Materials Needed:</Heading>
                        <Box className="break" height="3px" maxWidth="100px" marginTop="8px"></Box>
                        <List textAlign="center" spacing="5px" marginTop="15px">
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
            <Box height="100%" display="inline-block">
                <Flex flexDirection="column" alignItems="center" height="100%">
                    <Heading as="h3" size="xl" marginBottom="8px" textAlign="center">How To Tie Your Shoes</Heading>
                    <Box maxWidth="325px" textAlign="center" marginBottom="25px">
                        <Text>Tying your shoes can be hard sometimes. Get tips from an expert!</Text>
                    </Box>
                    <Box width="90%" maxWidth="350px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="2rem">
                        <Heading as="h4" size="lg" >Materials Needed:</Heading>
                        <Box className="break" height="3px" maxWidth="100px" marginTop="8px"></Box>
                        <List textAlign="center" spacing="5px" marginTop="15px">
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
        </Flex>
    )
}

export default Post
