let numeros = [1, 2, 3, 4, 5];

let SumaAcumulada = numeros.reduce((Acumulador, numero) => Acumulador + numero, 0);

console.log(SumaAcumulada);