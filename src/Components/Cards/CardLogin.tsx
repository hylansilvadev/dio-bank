import { Avatar, Box, Center,Text, ChakraProvider, Input, } from "@chakra-ui/react"
import  { useState } from "react"
import { Login } from "../../services/login"
import { DButton } from "../DButton"


export const CardLogin = () =>{
    
    const [email, setEmail] = useState<string>('')
    
    return(
        <ChakraProvider>
            <Box
                backgroundColor='#ffffff'
                borderRadius='25px'
                padding='15px'
                minWidth='25vw'
                >
                    <Center paddingBottom='5px'>
                            <Text  fontSize='xl'>
                                Faça Login
                            </Text>
                    </Center>
                    <Center
                        flexDirection='column'
                    >
                        < Avatar
                        margin='8px'
                        size='xl'
                        />
                        </Center>
                            <Input 
                            placeholder="email" 
                            type='email'
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                            />
                            <Input 
                            placeholder="password" 
                            type='password'
                            />
                            <DButton onClick={()=>{Login(email)}} />
                        <Center>
                    </Center>
                </Box>
        </ChakraProvider>
    )
}