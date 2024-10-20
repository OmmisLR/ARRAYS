function CalcularPro(arreglo){
    return arreglo.reduce((producto, numero)=>producto*numero, 1);
}

const numeros = [1,2,3,4,5];
const resultado = CalcularPro(numeros);

console.log(resultado);