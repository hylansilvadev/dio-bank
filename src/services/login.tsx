
import { api } from "../api"

export const Login = async(email:string, password: string):Promise<boolean> =>{
    const data: any = await api
    if(email !== data.email){
        if(password !== data.password){
            return false
        }
    }
        return true
}
