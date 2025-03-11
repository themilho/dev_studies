// Criar função que recebe um array e retorna o primeiro e último elemento desse array.

function receiveArray (array) {
    const arrayParam = array
    console.log(arrayParam, arrayParam.length)
    return `O primeiro valor é ${arrayParam[0]} e o último é ${arrayParam[arrayParam.length -1]}`
}

arrayEx = [-100,"aplicativo", 16]
console.log(receiveArray(arrayEx))