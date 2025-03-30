const carrinho = [
    '{"nome": "Borracha", "Preço": 3.45}',
    '{"nome": "Caderno", "Preço": 13.90}',
    '{"nome": "Kit de Lapis", "Preço": 41.22}',
    '{"nome": "Caneta", "Preço": 7.50}'
]


let price = carrinho.map(function(element, index){
    element = JSON.parse(element)

    return `Preço: R$${element.Preço.toFixed(2)}`
})

console.log(price)