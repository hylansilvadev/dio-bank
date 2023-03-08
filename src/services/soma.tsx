export const soma = (a:number, b:number):number =>{
    return a+b
}

export const multiplica = (numb: number, multi: number): number | string=>{
    if(multi === 2 || multi ===3){
        return numb * multi
    }
    return 'Multiplicador não aceito'
}