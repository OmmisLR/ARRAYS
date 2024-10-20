let valores = [1, 2, 3, 1, 4, 1, 5, 6];

let ValorBuscando = 1;

const conteo = valores.reduce((acumulador, valor) =>{
    return valor == ValorBuscando ? acumulador + 1 : acumulador;
}, 0);

console.log(conteo);