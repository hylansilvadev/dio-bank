
import { api } from "../api"

export const Login = async(email:string):Promise<boolean> =>{
    const data: any = await api
    if(email !== data.email){
        return false
    }
    return true    
}
