function capitalizar (palabra) {
    return palabra.replace (/\w\S*/g, function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
}

let palabra = 'hola mundo';
console.log(palabra);
console.log(capitalizar("make it real")) 
console.log(capitalizar("")) 
console.log();
console.log(capitalizar(palabra)); 