function palabrasNumeros(palabra) {

    return palabra    
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/1/g, 'cero')
    .replace(/dos/g, '2')
    .replace(/3/g, 'tres')
    .replace(/4/g, 'cuatro');

}
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]
