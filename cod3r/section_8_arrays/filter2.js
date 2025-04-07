Array.prototype.filter2 = function (callback) {
    const newArray = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    
    return newArray
}

const produtos = [
    {nome: 'Notebook', preço: 2499, frágil: true},
    {nome: 'iPad Pro', preço: 4199, frágil: true}, 
    {nome: 'Copo de Vidro', preço: 12.49, frágil: true},
    {nome: 'Copo de Plático', preço: 18.99, frágil: false}
]


const highPrice = price => price.preço >= 500;
const itsFragile = fragile => fragile.frágil;

console.log(produtos.filter2(highPrice).filter2(itsFragile))