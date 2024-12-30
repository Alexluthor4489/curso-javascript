//FOR In 
// É comumente usado em objetos. Ele serve para andar item por item do nosso objeto.
let user= {//Objeto => name, age e street: Aqui são as keys, ou seja, as chaves. Alex, 33, Rua dos Bobos n 0: São os valores representados por estas chaves.
    name : 'Alex',
    age : 35,
    street : 'Rua dos bobos'
}
console.log(user.name)//Quando você quiser exibir só uma key específica.
console.log(user.age)//Quando voc6e quiser exibir pela key
console.log(user)//Quando você quiser exibir o array todo

for(let key in user){//Primeiro se cria uma variável qualquer, aqui estou chamando de key e esta variável vai andando pelos os valores de user.
    console.log(user[key])

}
