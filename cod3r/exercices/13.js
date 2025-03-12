// Criar função que recebe um array com dados variados mas retorna outro array com apenas numbers 

function numbersFilter (genericArray) {
    const arrayNumbers = [];

    genericArray.forEach((numbers) => {
        if (typeof numbers == "number") {
            arrayNumbers.push(numbers) 
        }        
    });

    return arrayNumbers
}


console.log(numbersFilter(["JavaScript", 1, "3", "web", 20]))
console.log(numbersFilter(["a", "c"]))
console.log(numbersFilter(["a", 2, 3, 4, 5, 6, "c"]))