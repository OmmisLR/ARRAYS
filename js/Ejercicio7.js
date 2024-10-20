// Eliminar duplicados
//Dado un Arreglo de numeros, retorna un  nuevo arreglo con los valores unicos(sin duplicados)
const arreglo = [1, 2, 3, 1, 2, 3];
const NumerosSinRepetir = [...new Set(arreglo)];

console.log(NumerosSinRepetir);


