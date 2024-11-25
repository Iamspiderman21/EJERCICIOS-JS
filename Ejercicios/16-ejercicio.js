function capitalizar (palabra) {

    if (palabra.lenth === 0) 
        return '';
        return palabra.charAt(0).toUpperCase() + palabra.slice (1);
}
console.log(capitalizar("alan aguilar", 'gomez')) 
console.log(capitalizar('Spider' , 'rojo', 'Man')) 
console.log(capitalizar(""))