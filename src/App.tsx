import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button,
  AbsoluteCenter,
  Avatar,
  Text,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { Layout } from './Components/Layout';

import { Login } from './services/login'

export const App = () => {
  const OverlayOne = () => (
    <ModalOverlay
      backdropFilter='blur(10px)'
    />
  )


  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <ChakraProvider>
        <Box 
        minHeight='100vh'
        backgroundColor='#9413dc'
        padding='15px'
        >
          <Layout>
            <AbsoluteCenter>
                <Box
                backgroundColor='#ffffff'
                borderRadius='25px'
                padding='15px'
                width='25vw'
                >
                  <Center paddingBottom='5px'>
                    <Text fontSize='xl'>Faça Login</Text>
                  </Center>
                  <Center>
                    <Avatar
                    margin='8px'
                    >
                    </Avatar>
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
              </AbsoluteCenter>
          </Layout>
        </Box>
      </ChakraProvider>
    </>
  );
}