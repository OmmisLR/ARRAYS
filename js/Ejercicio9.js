/*
Dado un arreglo de números, retorna solo los números pares usando filter().
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 99, 120, 555];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);