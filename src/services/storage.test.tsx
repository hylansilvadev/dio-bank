import { getAllLocalStorage } from "./storage"

describe('teste do storage',()=>{

    const getItem = jest.spyOn(Storage.prototype, 'getItem')
    it('deve retornar o objeto no localStorage',()=>{
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })
})