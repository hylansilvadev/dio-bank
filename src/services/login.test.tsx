import { Login } from "./login";

// const mockSetIsLoggedIn = jest.fn()
// jest.mock('react',()=>({
//     ...jest.requireActual('react'),
//     useContext: () =>({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// const mockUseNavigate = jest.fn()
// jest.mock('react-router-dom',()=>({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () =>  mockUseNavigate 
// }))

describe('teste de login',()=>{
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'teste@teste.bank'

    it('Deve exibir um alert com um bem vindo caso o email seja válido', async()=>{
        const response = await Login(mockEmail)
        expect(response).toBeTruthy()
    })
    it('Deve exiir um erro caso o email seja inválido',async()=>{
        const response = await Login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})