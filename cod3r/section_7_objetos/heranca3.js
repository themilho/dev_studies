const pai = {nome: 'Pedro', corCabelo: 'preto'}; 


const filha1 = Object.create(pai);
console.log(filha1.nome);
filha1.nome = 'Ana';

console.log(filha1.nome)

filha