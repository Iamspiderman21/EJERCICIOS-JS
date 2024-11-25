function distancia (palabra1, palabra2) {
    let contador = 0;
    let minlength = Math.min(palabra1.length, palabra2.length);

    for(let i = 0; i < minlength; i++) {
        if (palabra1[i] !== palabra2[i] ) {
            contador++;
        }
    }
    return contador;
}
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3