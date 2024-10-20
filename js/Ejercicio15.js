function indice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

let numeros =[10, 20, 30, 40, 50];
let indice1 = obtenerIndice(numeros, 30);
let indice2 = obtenerIndice(numeros, 60);

console.log(indice1);
console.log(indice2);