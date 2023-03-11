import { Box } from "@chakra-ui/layout"

export const Card = ({children}:any) =>{
    return(
        <Box 
                    backgroundColor='#ffffff'
                    minHeight={120}
                    width={320}
                    borderRadius={25}
                    padding={'15px 15px'}
                    display='flex'
                    justifyContent='Center'
                    flexDirection='column'
                    >
                        {children}
                    </Box>
    )
}