//Recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação dos dois , sem utilizar o sinal de multiplicação. 


function multiply (num1, num2) {
    return num1 >= 0 && num2 >= 0 ? Math.imul(num1, num2) : `Números menores que zero`;
}

console.log(multiply(5,5))
console.log(multiply(0,7))
