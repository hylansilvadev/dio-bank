import { 
    ChakraProvider,
    Heading,
    Center
} from "@chakra-ui/react"

export const Header = () =>{
    return(
        <ChakraProvider>
            <Center>
                <Heading
                color='white'
                >
                    Dio Bank
                </Heading>
            </Center>
        </ChakraProvider>
    )
}