import { Login } from "./login";

describe('teste de login',()=>{
    const mockEmail = 'teste@teste.bank'
    const mockPassowrd = 'root'

    it('Deve exibir um alert com um bem vindo caso o email seja válido', async()=>{
        const response = await Login(mockEmail, mockPassowrd)
        expect(response).toBeTruthy()
    })
    it('Deve exibir um erro caso o email ou a senha estejam nulos',async()=>{
        const response = await Login('','')
        expect(response).toBeFalsy()
    })
    
})