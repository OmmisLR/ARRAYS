/*Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números.*/

function calcularPromedio(arreglo) {
    if (arreglo.length === 0) return 0; // Maneja el caso de arreglo vacío

    const suma = arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / arreglo.length;
}


const numeros = [10, 20, 30, 40];
const promedio = calcularPromedio(numeros);
console.log(promedio); // Salida: 25
