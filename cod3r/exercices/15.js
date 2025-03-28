//Criar uma função que recebe um array de números e retorna dois arrays, um com números pares e outro com números ímpares

function arrayOfNumbers (array) {
    const evenNumbers = [];
    const oddNumbers = [];

    console.log(array)

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers.push(array[i]) 
        } else {
            oddNumbers.push(array[i])
        }
    }

    return [evenNumbers, oddNumbers]
}

console.log(arrayOfNumbers([1,2,3,4,5,6,7,8,9,10]))