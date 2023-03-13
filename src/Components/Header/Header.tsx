import { 
    Heading,
    Center,
    Flex,
    Spacer,
    Button
} from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../AppContext"

export const Header = () =>{
    const { isLoggedIn,setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () =>{
        setIsLoggedIn(false)
        navigate(`/`)
    }

    return(
        <Flex>
            <Center>
                <Heading
                color='white'
                marginLeft={15}
                >
                    Dio Bank
                </Heading>
            </Center>
            <Spacer/>
            {
                isLoggedIn &&
                (
                    <>
                        <Button 
                        marginRight={15}
                        onClick={()=> logout()}>
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>
    )
}