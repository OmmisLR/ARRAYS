function esteVacio(arreglo){
    return !arreglo.some(() => true);
}

const arreglo1 = [];
const arreglo2 = [1, 2, 3];

console.log(esteVacio(arreglo1));
console.log(esteVacio(arreglo2));