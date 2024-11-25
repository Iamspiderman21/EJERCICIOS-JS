function multiplicarArreglo(arreglo) {
   if(arreglo.length === 0) return 1;
   return arreglo.reduce((acc,num) => acc * num, 1);
}

console.log(multiplicarArreglo([4, 5, 2, 3])) // 24
console.log(multiplicarArreglo([1, 0, 3, 4, 5, 62, 17, 8])) // 40320
console.log(multiplicarArreglo([1, 3, 5, 0])) // 1