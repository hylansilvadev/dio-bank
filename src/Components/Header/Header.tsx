import { 
    ChakraProvider,
    Heading,
    Center
} from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../App"

export const Header = () =>{
    const context = useContext(AppContext)
    
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