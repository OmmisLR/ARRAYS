const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 32 },
    { nombre: "Pedro", edad: 45 },
    { nombre: "María", edad: 29 },
    { nombre: "Luis", edad: 38 }
];

const agrupadas = personas.reduce((acumulador, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10 + 's';

    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }
    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(agrupadas);
