// Recebe 2 parâmetros. O primeiro parâmetro repetirá e o segundo será a quantidade de vezes que repetirá. Retornar com tipo Array


function repeater (repeaterParam, quantityParam) {
    const result = [];
    for (i=0; i < quantityParam; i++) {
        result.push(repeaterParam);
    }
    return result;
}

console.log(repeater('código', 3))
console.log(repeater(7, 3))