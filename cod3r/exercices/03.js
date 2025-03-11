//Calcular Horas Trabalhadas

function calcHoursWorked (hoursWorked,moneyPerHour) {
    const salary = hoursWorked * moneyPerHour;
    return `Salário igual a R$ ${salary}`;
}

console.log(calcHoursWorked(150,40.5));