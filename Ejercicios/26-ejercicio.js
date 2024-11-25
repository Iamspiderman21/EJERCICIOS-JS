function imprimirMatriz (arreglo) {
    
    for ( let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo[i].length; j++) {
            console.log (arreglo[i][j]);
        }
    }
}
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))