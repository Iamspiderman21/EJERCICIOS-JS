function sumarRango(inicio, final) {
    let contador = 1;

    //Se realiza un ciclo para calcular la cantidad de numero que hay en uno y otr
    for (let i = inicio; - i < final; i++) {
        contador++;
    }
    return contador;
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
