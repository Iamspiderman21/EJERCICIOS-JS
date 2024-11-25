function min(arreglo) {
    if (arreglo.length === 0) {
        throw new Error("El arreglo no puede estar vacío");
    }

    let minNum = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minNum) {
            minNum = arreglo[i];
        }
    }

    return minNum;
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2