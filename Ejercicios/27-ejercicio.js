function numerosApalabras (palabra) {

    const numerosEnPalabras = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve',]
    return palabra.map( num => numerosEnPalabras[num]);

}
console.log(numerosApalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosApalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]