function empiezaConA (palabra) {

    return palabra.filter(word => word.toLowerCase().startsWith('a'));
}
console.log(empiezaConA(["avion", "alfa", "Arbol", "gama"]));
console.log(empiezaConA(["beta", "Alan", ""]));
console.log(empiezaConA([])) // []