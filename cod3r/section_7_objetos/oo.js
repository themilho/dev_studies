
const pai = {
    a: 'a',
    b: 'b'
}

const filho = {__proto__:pai, c:'c'};


console.log(pai)
console.log(Object.keys(filho))