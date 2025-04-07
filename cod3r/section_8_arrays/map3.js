Array.prototype.map2 = function(callback){
    let newArray = [];

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "Preço": 3.45}',
    '{"nome": "Caderno", "Preço": 13.90}',
    '{"nome": "Kit de Lapis", "Preço": 41.22}',
    '{"nome": "Caneta", "Preço": 7.50}'
]


const toObject = json => JSON.parse(json);
const onlyPrice = product => product.Preço;
const toMoney = value => `Preço: R$ ${value.toFixed(2).replace('.',',')}`

const result = carrinho.map2(toObject).map2(onlyPrice).map2(toMoney);

console.log(result)



