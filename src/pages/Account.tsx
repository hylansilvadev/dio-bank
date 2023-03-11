import { Center, SimpleGrid } from "@chakra-ui/layout"
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { CardInfo } from "../Components/Cards/CardInfon"
import { AppContext } from "../Components/AppContext"

interface userData{
    email: string,
    password:string,
    name:string,
    balance:number,
    id:string
}

export const Account = () => {

    const [userData, setUserData] = useState<null | userData>()
    const {isLoggedIn} = useContext(AppContext)
    const {id} = useParams()
    const navigate = useNavigate()
    
    !isLoggedIn && navigate('/')
    

    useEffect(() => {
        const getData = async () => {
            const data:any | userData= await api
            setUserData(data)
        }
        getData()
    }, [])

    const actualData = new Date()

    if(userData && id !== userData.id){
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} padding={16}>
                { userData === undefined || userData === null ? 
                    (
                        <Spinner 
                            size='xl'
                            speed={'0.4s'}
                            color={'white'}
                            thickness={'8px'}
                        />
                    ) : 
                    (
                        <>
                            <CardInfo 
                            mainContent={`Bem vindo ${userData?.name} !`}  
                            content={`
                                        ${actualData.getUTCDay()} / 
                                        ${actualData.getUTCMonth()} / 
                                        ${actualData.getUTCFullYear()} 
                                        ${actualData.getUTCHours()}:
                                        ${actualData.getUTCMinutes()}:
                                        ${actualData.getUTCSeconds()}
                                `}/>
                            <CardInfo mainContent="Saldo atual" content={`Saldo: R$${userData?.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

