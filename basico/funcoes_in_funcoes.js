const soma = (...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)
            res+=v
        return res  
    }
    somar(valores)
}

console.log(soma(1,2)) 