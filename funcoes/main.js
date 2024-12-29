function estaEndividado(receita,gastos){//Função normal que está recebendo 2 parâmetros (receita e gastos)
     if(receita < gastos){
        return 'Está endividado!'
     }
     else{
         return 'Não está endividado!'
     }
}

let alex = estaEndividado(5000, 10000)
let franciele = estaEndividado(700, 300)

console.log(alex)

const ferramenta = (ferramenta1, ferramenta2) => {//Arrow function ou função de flecha é uma forma mais moderna de se escrever uma função, mas funcciona da mesma forma. O que muda é que ela é escrita dentro de uma variável.
    
    let caixaFerramenta = `Dentro da sua caixa de ferramentas contém um ${ferramenta1} e um ${ferramenta2}.`
    console.log(caixaFerramenta)
}

ferramenta('Martelo','Alicate')