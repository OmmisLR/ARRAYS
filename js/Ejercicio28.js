const personas = [
    { nombre: "Juan", edad: 25},
    { nombre: "Ana", edad: 30},
    { nombre: "Pedro", edad: 35},
];

const nombres = personas.map(persona => persona.nombre);

console.log(nombres);