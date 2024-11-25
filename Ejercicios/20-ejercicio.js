function password (palabra) {

    return palabra    
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/a/g, '4')
    .replace(/3/g, '3')
    .replace(/i/g, '1')
    .replace(/o/g, '0');
    
}
console.log(password('hola')) // "h0l4"
console.log(password('Spiderman')) // "3st43sun4pru3b4"
console.log(password('IamAlanaguilar')) // ""