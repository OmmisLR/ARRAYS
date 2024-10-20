const objetos = [
    {nombre: "Juan", edad: 25},
    {nombre: "Alancito", edad: 30},
    {nombre: "Pedrito", edad: 35},
    {nombre: "Omis", edad: 28},
];

const propiedadBuscada = "edad";
const ValorBuscando = 30;

const objetoEncontrado = objetos.find(objeto => objeto[propiedadBuscada] == ValorBuscando);

console.log(objetoEncontrado);