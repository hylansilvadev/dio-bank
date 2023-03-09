import { ExternalLinkIcon } from "@chakra-ui/icons"
import { 
    ChakraProvider,
    Text,
    Center,
    Flex,
    Avatar,
    Box,
    Link,
    Badge
} from "@chakra-ui/react"

import './Footer.css'

export const Footer = () =>{
    return(
        <ChakraProvider>
            <Center className='bottom' flexDirection='column'>
            <Text 
                color='white'
                as='sup'
                textAlign='center'
                padding='15px 0'
                >
                ® Dio Bank | Todos os direitos reservados
            </Text>
            <Flex>
                <Text as='sub' color='white'>
                    Made By:
                </Text>
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
        </ChakraProvider>
    )
}