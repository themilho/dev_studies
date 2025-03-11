//Criar função que recebe um número como parâmetro e retornará o sinal de "+" na quantidade de vezes do parâmetro informado.


/*function repeater (amountRepetition) {
    let symbolRepeater = '';

    for (i=0; i < amountRepetition; i++){
        symbolRepeater += '+';
    }
    return symbolRepeater;
}*/

// Best way to resolve this problem:
function repeater (amountRepetition) {
    return '+'.repeat(amountRepetition);
}

console.log(repeater(4))