import React from 'react';

import MyIconButton from './MyIconButton';

import {
    Box,
    Flex,
    Heading,
    Text,
    List,
    ListItem,
    Center,
    Spacer
} from '@chakra-ui/react';

import {
    FaHeart,
    FaHeartBroken,
    FaShare
} from 'react-icons/fa';


function Post(props) {
    console.log(props);
    return (
        <Box borderTop="1px solid gainsboro">
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "" }} minHeight="350px" paddingTop="15px">
                <Box width={{ base: "100%", md: "50%"}} marginBottom={{ base: "20px", md: "" }} display="inline-block">
                    <Flex flexDirection="column" alignItems="center">
                        <Heading as="h3" size="xl" fontWeight="300" marginBottom="12px" textAlign="center">{props.post.title}</Heading>
                        <Box maxWidth="325px" textAlign="center" marginBottom="25px">
                            <Text>{props.post.description}</Text>
                        </Box>
                        <Box width="90%" maxWidth="425px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="2rem">
                            <Heading as="h4" size="lg" fontWeight="300" >Materials Needed:</Heading>
                            <Box className="break" height="2px" maxWidth="100px" marginTop="8px"></Box>
                            <List textAlign="center" spacing="5px" marginTop="15px">
                                {props.post.materials &&
                                    props.post.materials.map(material => {
                                        const matNumber = props.post.materials.indexOf(material) + 1;
                                        return (
                                            <ListItem>
                                                <Text fontSize="lg">{matNumber}. {material}</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>
                    </Flex>
                </Box>
                <Box width={{ base: "100%", md: "50%"}} display="inline-block">
                    <Flex flexDirection="column" alignItems="center" justifyContent="center">
                        <Box width="90%" maxWidth="500px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="1.5rem">
                            <Heading as="h4" size="lg" fontWeight="300" >Instructions:</Heading>
                            <Box className="break" height="2px" maxWidth="100px" marginTop="8px"></Box>
                            <List textAlign="center" spacing="15px" marginTop="15px">
                                {props.post.steps &&
                                    props.post.steps.map(step => {
                                        return (
                                            <ListItem>
                                                <Text fontSize="lg">{step.stepNumber}. {step.name}</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Center marginTop="25px" padding="0">
                <Flex width="60%" maxWidth="250px" justifyContent="space-between" padding="1rem 2rem" borderTopRadius="0.6rem" bgColor="#F7F7F7">
                    <MyIconButton
                        icon={<FaHeart />}
                    />
                    <Spacer />
                    <MyIconButton
                        icon={<FaHeartBroken />}
                    />
                    <Spacer />
                    <MyIconButton
                        icon={<FaShare />}
                    />
                </Flex>
            </Center>
        </Box>
    )
}

export default Post
