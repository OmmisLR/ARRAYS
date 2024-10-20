//Buscar elemento
//Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
//en el arreglo y false si no.

function ContieneValor(arreglo, valor){
    return arreglo.includes(valor);
}

const numeros = [1, 2, 3, 4, 5];
const existe = ContieneValor(numeros, 3);
const Noexiste = ContieneValor(numeros, 6);

console.log(existe);
console.log(Noexiste);
