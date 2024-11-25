function terminaConS (palabra) {

    return palabra.filter(word => word.toLowerCase().endsWith('s'));

}
console.log(terminaConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminaConS(["beta", "delta", "gama"])) // []
console.log(terminaConS([])) // []