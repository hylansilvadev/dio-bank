import { 
    ChakraProvider,
    Text,
    Center
} from "@chakra-ui/react"

export const Footer = () =>{
    return(
        <ChakraProvider>
            <Center>
                <Text 
                color='white'
                as='sup'
                textAlign='center'
                paddingTop='15px'
                >
                ® Dio Bank | Todos os direitos reservados
                </Text>
            </Center>
        </ChakraProvider>
    )
}