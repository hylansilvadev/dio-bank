import { Avatar, Box, Button, Center,Text, ChakraProvider, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { Login } from "../services/login"

export const Card = () =>{
    const OverlayOne = () => (
        <ModalOverlay
            backdropFilter='blur(10px)'
        />
        )
    
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return(
        <ChakraProvider>
            <Box
                backgroundColor='#ffffff'
                borderRadius='25px'
                padding='15px'
                minWidth='25vw'
                >
                    <Center paddingBottom='5px'>
                        <Text  fontSize='xl'>Faça Login</Text>
                    </Center>
                    <Center>
                    < Avatar
                    margin='8px'
                    size='xl'
                    />
                    
                    </Center>
                    <Input 
                    placeholder="email" 
                    type='email'
                    />
                    <Input 
                    placeholder="password" 
                    type='password'
                    />
                    <Center>
                    <Button
                    colorScheme='teal'
                    size='sm'
                    width='100%'
                    marginTop='5px'
                    onClick={()=>{
                        setOverlay(<OverlayOne />)
                        onOpen()
                    }}

                    >
                        Entrar
                    </Button>
                    <Modal 
                    isCentered 
                    isOpen={isOpen} 
                    onClose={onClose}>
                        {overlay}
                    <ModalContent
                    borderRadius='25px'
                    minWidth='25vw'
                    minHeight='27vh'
                    >
                    <ModalBody
                    padding='15px'
                    >
                        <Login/>
                        <ModalCloseButton />
                    </ModalBody>
                    </ModalContent>
                </Modal>
                    </Center>
                </Box>
        </ChakraProvider>
    )
}