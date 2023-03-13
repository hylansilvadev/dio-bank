
import { Box, Center, Text } from '@chakra-ui/layout'
import { Avatar, Input } from '@chakra-ui/react'
import { Card } from '../Components/Cards/Card'
import { DButton } from '../Components/DButton'
import { Login } from '../services/login'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Components/AppContext'


export const Home = () =>{
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(AppContext)
    const validateUser = async (email:string, password: string) => {
        const loggedIn = await Login(email,password)

        if(!loggedIn){
            alert('email ou senha inválidos')
            setEmail('')
            setPassword('')

        }else{
            setIsLoggedIn(true)
            navigate(`/account/userText`)
        }
        
    }

    return(
        <Box
        padding='25px'
        >
            <Card>
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
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                            />
                            <DButton onClick={()=>{validateUser(email, password)}}/>
                        <Center>
                    </Center>
            </Card>
        </Box>
    )
}