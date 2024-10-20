/*Concatenar arreglos
Escribe una función que tome dos arreglos y los combine en uno solo.*/

function CombinarArreglo(Arreglo1, Arreglo2){
    return Arreglo1.concat(Arreglo2);
}

const arregloA = [1, 2, 3];
const arreglob = [4, 5, 6];
const ArreglocoM = CombinarArreglo(arregloA, arreglob);

console.log(ArreglocoM);