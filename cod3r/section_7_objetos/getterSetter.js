const sequencia = {
    _valor: 1, // convenção no mundo dev
    get valor () {
        return this._valor++
    },
    set valor (valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor, sequencia.valor)


const obj1 = {
    tipo: 'número',
    valor: 10 
}
const obj2 = new Object;
// console.log(obj2);

obj2.nome = 'Valério';

// console.log(obj2);

obj2.propEmpty = '';

// console.log(obj2);

// console.log(Object.entries(obj2));


Object.assign(obj2,obj1);
console.log(obj2)
console.log(obj2.__proto__)