function palabrasConMasDeNLetras(arreglo, n){
    return arreglo.filter(palabra => palabra.length > n);
}

const palabras = ["Hola", "Manzana", "Cuando", "Omis", "SOl", "JuanCaballito"];
const n = 4;
const resultado = palabrasConMasDeNLetras(palabras, n);

console.log(resultado);