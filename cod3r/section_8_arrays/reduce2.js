const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: true },
    {nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas? 
const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador, valorAtual){
    // let resposta = `Todos os estudantes são bolsistas`;

    if(acumulador && valorAtual) {
        
    } else {
        
    }
    return acumulador && valorAtual
})

const mensagem =  resultado1 ? `Todos são bolsistas` : `Nem todos são bolsistas`

console.log(mensagem)
// Desafio 2: Algum aluno é bolsista?
