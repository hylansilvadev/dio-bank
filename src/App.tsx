import { Layout } from './Components/Layout';
import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button,
  AbsoluteCenter,
  Avatar,
  Text
} from '@chakra-ui/react'

import { login } from './services/login';
export const App = () => {
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
              width='15vw'
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
                  onClick={login}
                  >
                    Entrar
                  </Button>
                </Center>
              </Box>
            </AbsoluteCenter>
          </Layout>
            
        </Box>
      </ChakraProvider>
    </>
  );
}