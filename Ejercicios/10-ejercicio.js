function numeroDeCaracteres (palabra, num) {
    let contar = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === num) {
            contar++;
        }
    }
    return contar;

}

console.log(numeroDeCaracteres('Hola Mundo', 'o'));
console.log(numeroDeCaracteres('Spider Man','a'));
console.log(numeroDeCaracteres('Venom'));