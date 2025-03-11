//Função que retorna se o primeiro é maior ou igual ao segundo.

function firstBiggerOrEqualThanSecond (first, second) {
    if (first > second) {
        return `Sim! ${first} é maior que ${second}`;
    }else if (first == second) {
        return `Sim! ${first} é igual a ${second}`;
    }else {
        return `Não! ${first} não é maior ou igual a ${second}`
    }
}

console.log(firstBiggerOrEqualThanSecond(0,2))