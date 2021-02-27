import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { sendLike, sendUnlike } from '../store/app';

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
    const dispatch = useDispatch();
    const { likes } = useSelector(state => state.app.user);

    return (
        <Box borderTop="1px solid gainsboro">
            <Box float="left" width="50px" height="50px" background="#F7F7F7" borderBottomRightRadius="5px" >
                <Center fontSize="mg">
                    POST
                </Center>
                <Center fontWeight="bold">
                    {props.post.post_id}
                </Center>
            </Box>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "" }} minHeight="350px" paddingTop="15px">
                <Box width={{ base: "100%", md: "50%"}} marginBottom={{ base: "20px", md: "" }} display="inline-block">
                    <Flex flexDirection="column" alignItems="center">
                        <Heading as="h3" size="xl" fontWeight="300" marginBottom="12px" textAlign="center">{props.post.title}</Heading>
                        <Box maxWidth="325px" textAlign="center" marginBottom="25px">
                            <Text fontSize="lg">{props.post.description}</Text>
                        </Box>
                        <Box width="90%" maxWidth="425px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="2rem">
                            <Heading as="h4" size="lg" fontWeight="300" >Materials Needed:</Heading>
                            <Box className="break" height="2px" maxWidth="100px" marginTop="8px"></Box>
                            <Box textAlign="center" spacing="5px" marginTop="15px">
                                {props.post.materials &&
                                    <Text fontSize="lg">{props.post.materials}</Text>
                                }
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box width={{ base: "100%", md: "50%"}} display="inline-block">
                    <Flex flexDirection="column" alignItems="center" justifyContent="center">
                        <Box width="90%" maxWidth="500px" bgColor="#F7F7F7" borderTopLeftRadius="1rem" borderBottomRightRadius="1rem" padding="1.5rem">
                            <Heading as="h4" size="lg" fontWeight="300" >Instructions:</Heading>
                            <Box className="break" height="2px" maxWidth="100px" marginTop="8px"></Box>
                            <List textAlign="center" spacing="15px" marginTop="15px">
                                {props.steps &&
                                    props.steps.map(step => {
                                        return (
                                            <ListItem key={step.step_id}>
                                                <Text fontSize="lg">{step.step_number}. {step.step_name}</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Center marginTop="50px" padding="0">
                <Flex width="60%" maxWidth="250px" justifyContent="space-between" padding="1rem 2rem" borderTopRadius="0.6rem" bgColor="#F7F7F7">
                    <MyIconButton
                        icon={<FaHeart />}
                        onClick={() => dispatch(sendLike(props.post.post_id))}
                        isDisabled={likes.map(like => like.post_id).includes(props.post.post_id)}
                    />
                    <Spacer />
                    <MyIconButton
                        icon={<FaHeartBroken />}
                        onClick={() => dispatch(sendUnlike(props.post.post_id))}
                        isDisabled={likes.map(like => like.post_id).includes(props.post.post_id) ? false : true}
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

export default Post;
