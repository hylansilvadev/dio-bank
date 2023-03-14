import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}

describe('teste do storage',()=>{

    it('deve retornar o objeto no localStorage com a chave diobank', ()=>{
            const mockGetItem = jest.spyOn(Storage.prototype,'getItem')
            getAllLocalStorage()
            expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

        it('deve criar o objeto no localstorage', ()=>{
            const mokSetItem = jest.spyOn(Storage.prototype, 'setItem')
            createLocalStorage()
            expect(mokSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))    
    })
        it('deve alterar o valor do objeto no localStorage', ()=>{
            const mokSetItem = jest.spyOn(Storage.prototype, 'setItem')
            changeLocalStorage(diobank)
            expect(mokSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
        })
})