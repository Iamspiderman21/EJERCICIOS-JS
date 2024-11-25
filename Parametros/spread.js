console.log ();

const lista1 = [1,2,3];
const lista2 = [4,5,6];

function suma (...numeros) {
    numeros = [1, 3, 5, 66, 2, 2421, 4, 24, 25, 344, 222, 1];
    const resultado = numeros.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
    console.log (resultado);
}

suma(1, 3, 5, 66, 2, 2421, 4, 24, 25, 344, 222, 1);

