import { AbsoluteCenter, Box, ChakraProvider } from '@chakra-ui/react'
import { Card } from './Card'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({children}:any) =>{
    return(
        <ChakraProvider>
        <Box 
        minHeight='100vh'
        backgroundColor='#9413dc'
        padding='15px'
        >   
            <Header/>
            <AbsoluteCenter>
                <Card />
            </AbsoluteCenter>
            <Footer/>
        </Box>
        </ChakraProvider>
    )
}