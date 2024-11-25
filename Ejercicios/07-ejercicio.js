function contarRango(inicio, fin) {
    let contador = 0;

    //Se realiza un ciclo para calcular la cantidad de numero que hay en uno y otr
    for (let i = inicio; - i < fin; i++) {
        contador++;
    }
    return contador;
}

console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0