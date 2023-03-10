import { Button} from "@chakra-ui/react"
import { MouseEventHandler } from "react"


interface IDButton{
    onClick: MouseEventHandler
}

export const DButton = ({onClick}:IDButton) =>{
    return(
        <Button
                colorScheme='teal'
                size='sm'
                width='100%'
                marginTop='5px'
                onClick={onClick}
        >
            Entrar
        </Button>
    )
}