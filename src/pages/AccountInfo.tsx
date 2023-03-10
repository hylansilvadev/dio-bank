import { Text } from "@chakra-ui/layout"
import { Link } from "react-router-dom"

export const AccountInfo = () =>{
    return(
        <>
        <Text>
            Informações da conta
        </Text>
            <Link to={'/account/userText'}>
                <Text
                fontSize={'xl'}>
                    Conta
                </Text>
            </Link>
        </>
    )
}