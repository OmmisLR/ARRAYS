const arreglo1 = [
    { nombre: "Juan", edad: 25},
    { nombre: "Omis", edad: 30}
];
const arreglo2 = [
    { ciudad: "Madrid"},
    { ciudad: "Barcelona"}
];

const combinados = arreglo1.map((objeto, index) => {
    return {...objeto, ...arreglo2[index]};
});

console.log(combinados);