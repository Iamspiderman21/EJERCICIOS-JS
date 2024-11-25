function numeroDeAes (vocal) {
    let contar = 0;

    for (let i = 0; i < vocal.length; i++) {
        if (vocal[i] === 'a' || vocal === 'A') {
            contar++;
        }
    }
    return contar;
}

console.log(numeroDeAes('abracadabra'));
console.log(numeroDeAes('etinol'));
console.log(numeroDeAes('Alana'));