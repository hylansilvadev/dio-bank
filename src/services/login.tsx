import { 
    ChakraProvider,
    Text,
    AbsoluteCenter
 } from "@chakra-ui/react"

export const Login = () =>{
    return(
        <ChakraProvider>
            <AbsoluteCenter>
                <Text
                fontSize='4xl'
                >Bem Vindo!</Text>
            </AbsoluteCenter>
        </ChakraProvider>
    )
}
