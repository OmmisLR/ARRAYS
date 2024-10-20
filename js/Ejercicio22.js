const valores = [0, 1, '', null, undefined, 'Hola', false, 42, Nan];

const valoresVerdaderos = valores.filter(valor => Boolean(valor));

console.log(valoresVerdaderos);