import React from 'react'

import {
    Modal,
    ModalContent,
    ModalOverlay,
    Spinner,
    Center
} from '@chakra-ui/react';

function LoadingModal() {
    return (
        <Modal isOpen={true}>
            <ModalOverlay />
                <ModalContent background="none" shadow="none">
                <Center>
                    <Spinner size="xl" color="white" thickness="4px" position="fixed" top="50%" />
                </Center>
                </ModalContent>
        </Modal>
    )
}

export default LoadingModal
