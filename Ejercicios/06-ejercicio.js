function fizzBuzz (numero) {

    if(numero % 3 == 0 && numero % 5 ==0)  {
        return 'fizzbuz';
    } else if (numero % 5 == 0){
        return 'buzz';
    } else if (numero % 3 == 0) {
        return 'fizz';
    } else {
        return numero;
    }
}

// console.log('2' === 2)



console.log(fizzBuzz(13));
console.log(fizzBuzz(238));
console.log(fizzBuzz(20));
console.log(fizzBuzz(3));


