//Função que recebe boolean ou number. Deve retornar o inverso. Ex: false retorna true, ou 20 retorna -20. Se for valor diferente desses dois, retornará: "Booleano ou número esperados, mas o parâmetro é do tipo xx"


function reverse (value) {   
    if (value === true) {
        return false; 
    } else if (value === false) {
        return true;
    } else if (typeof(value) === 'number') {
        return value * -1
    } else {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof(value)}`
    }
}


console.log(reverse(true))
console.log(reverse(false))
console.log(reverse("6"))
console.log(reverse(-2000))
console.log(reverse("programação"))