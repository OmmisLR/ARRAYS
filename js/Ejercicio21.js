function ConvertirCadenaPalabras(Cadena){
    return Cadena.split( ' ');
}

const texto = "Hola Mundo, this is a example "
const arregloPalabras = ConvertirCadenaPalabras(texto);

console.log(arregloPalabras);