//Escrever função que recebe objeto como parâmetro e retorna um array de arrays. O array interno é feito por chave e valor do objeto.



function objectToArray (objetcForArray) {
    const arrayForObject = Object.entries(objetcForArray)
    
    return arrayForObject
}


// console.log(objectToArray(objetcForArray));
console.log(objectToArray({Nome: 'Maria', Profissão: 'Desenvolvedora de Software'}));
console.log(objectToArray({Nome: 'Julio', Profissão: 'Testador'}));
