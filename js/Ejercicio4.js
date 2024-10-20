/*Invertir un arreglo
Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).*/

function invertirArreglo(arreglo) {
    const arregloInvertido = [];
    
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }
    
    return arregloInvertido;
}


const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = invertirArreglo(numeros);
console.log(numerosInvertidos); 
