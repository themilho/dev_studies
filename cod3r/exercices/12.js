// criar função que recebe 1 objeto como primeiro parâmetro e o nome de um atributo contina nesse objeto como segundo parâmetro. O retorno dessa função não deverá conter a propriedade mencionada no segundo parâmetro. A ideia é fazer com que o objeto principal não seja substituído e sim copiado. 


function removeProperty (object, objectProperty) {
    const objectSubstitute = structuredClone(object);
    
    delete objectSubstitute[objectProperty];
    
    return objectSubstitute
}

const object = {
        id: 20,
        nome: "caneta",
        descrição: "Não preenchido"
}

console.log(removeProperty({a:1, b:2}, "a"))
console.log(removeProperty(object, "descrição"))

const modified = removeProperty(object, "descrição")

console.log(Object.is(object,modified))
console.log(object,modified)