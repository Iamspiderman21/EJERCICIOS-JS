function sumarArreglo(arr, inicio, fin) {
    if (inicio < 0 || fin >= arr.length || inicio > fin) return 0;
    return arr.slice(inicio, fin + 1).reduce((acc, num) => acc + num, 0);
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 7
