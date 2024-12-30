//FOR EACH
//For Each(item, index, array)
//item => Dados, informações contidas na posição atual do elemento
//index => Número da posição. Sempre começa com 0.
//array => Retorna o Array completo

let user = [
    { name:'Jesus', age: 32, contact: '(12)00000-0001'},
    { name:'Maria', age: 31, contact: '(12)00000-0002'},
    { name:'José', age: 17, contact: '(12)00000-0003'},
    { name:'Alex', age: 35, contact: '(12)00000-0004'}
]

/*user.forEach(function(item, index){// forEach usando uma function comum
    console.log(item)
    console.log(index)

    if(item.age > 18){
    console.log(`O usuário: ${item.name}, posição ${index} é maior de idade`)
    }else{  
    console.log(`O usuário: ${item.name}, posição ${index} é menor de idade`)
    }
})*/
user.forEach((item, index) => {// forEach usando uma Arrow function
    console.log(item)
    console.log(index)

    if(item.age > 18){
    console.log(`O usuário: ${item.name}, posição ${index} é maior de idade`)
    }else{  
    console.log(`O usuário: ${item.name}, posição ${index} é menor de idade`)
    }
})
