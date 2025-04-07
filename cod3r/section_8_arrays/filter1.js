const produtos = [
    {nome: 'Notebook', preço: 2499, frágil: true},
    {nome: 'iPad Pro', preço: 4199, frágil: true}, 
    {nome: 'Copo de Vidro', preço: 12.49, frágil: true},
    {nome: 'Copo de Plático', preço: 18.99, frágil: false}
]


console.log(produtos.filter(function(product) {
    return product.preço > 500 && product.frágil == true
}))

const highPrice = price => price.preço >= 500;
const itsFragile = fragile => fragile.frágil;

console.log(produtos.filter(highPrice).filter(itsFragile))