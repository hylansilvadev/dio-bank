import { Login } from "./login";

describe('teste de login',()=>{
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'teste@teste.bank'

    it('Deve exibir um alert com um bem vindo caso o email seja válido', async()=>{
        await Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail} !`)
    })

    it('Deve exibir uma mensagem de erro caso não venha com email algum', async()=>{
        await Login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo !')
    })

    it('Deve exiir um erro caso o email seja inválido',async()=>{
        await Login('email@invalido.com')
        expect(mockAlert).toHaveBeenLastCalledWith('Email Inválido')
    })
})