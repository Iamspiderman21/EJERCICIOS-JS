function duplicar (numero) {
    return numero.map( num => num * 2);

}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []