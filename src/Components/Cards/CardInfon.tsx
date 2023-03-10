import { Text } from "@chakra-ui/layout"
import { Card } from "./Card"

interface ICardInfo {
    mainContent: string
    content: string
}

export const CardInfo = ({mainContent, content}:ICardInfo) =>{
    return(
        <>
            <Card>
                <Text
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                    >
                        {mainContent}
                        </Text>
                        <Text
                    fontWeight={'medium'}
                    fontSize={'xl'}
                    >
                        {content}
                </Text>
            </Card>
        </>
    )
}