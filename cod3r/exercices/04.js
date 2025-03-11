//Recebe números de 1 a 12 e retorna o mês equivalente ao número


function convertMonth (monthInNumber) {
    const monthInName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    monthInNumber = monthInNumber -1;

    if (monthInNumber >= 0 && monthInNumber <= 11) {
        return `O mês é ${monthInName[monthInNumber]}`;

    } else {
        return `O número não corresponde aos meses do calendário`;
    }
}


console.log(convertMonth(12));