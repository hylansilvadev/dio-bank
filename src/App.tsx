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
  useDisclosure,
  Flex,
  Badge,
  Link
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'

import React from 'react';

import { Layout } from './Components/Layout';

import { Login } from './services/login'

import './App.css'
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
                width='50vw'
                minWidth='45vw'
                >
                  <Center paddingBottom='5px'>
                    <Text fontSize='xl'>Faça Login</Text>
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
              </AbsoluteCenter>
          </Layout>
          <Center className='bottom'>
            <Flex>
              <Avatar  src='https://pps.whatsapp.net/v/t61.24694-24/322511880_102892859367639_7053001873785196728_n.jpg?ccb=11-4&oh=01_AdTlhpvvSAx_doTgPqEIIllM_cuVHSGQW6bDO1h94zqVcQ&oe=6416D2FA' />
              <Box ml='3' >
                <Text 
                fontWeight='bold'
                color='white'
                >
                  <Link href='https://github.com/hylansilva' isExternal>
                    Hylan Silva
                    <Badge ml='1' colorScheme='whatsapp'>
                      New
                    </Badge> 
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Text>
                <Text 
                fontSize='sm'
                color='white'
                >TypeScript Developer</Text>
              </Box>
            </Flex>
          </Center>
        </Box>
      </ChakraProvider>
    </>
  );
}