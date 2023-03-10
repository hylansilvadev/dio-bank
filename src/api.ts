const conta = {
    email: 'teste@teste.bank',
    password: 'root',
    name: 'Admin',
    balance: 2000.00,
    id: 'userText'
}

export const api = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(conta)
    },3000)
})