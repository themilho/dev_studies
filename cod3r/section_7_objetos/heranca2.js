Object.prototype.attr0 = 'Atributo não encontrado';
const avô = { attr1: 'A'};
const pai = {__proto__: avô, attr2: 'B'};
const filho = {__proto__: pai, attr3: 'C'};


console.log(filho.attr1)
