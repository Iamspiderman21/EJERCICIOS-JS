function posiciones (numero) {

    return numero.filter(num => num % 2 !== 0);
}


console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []