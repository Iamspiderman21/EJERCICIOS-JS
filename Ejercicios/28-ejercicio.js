function numAsteriscos (asterisco) {

  return asterisco.filter( element => element === '*').length;

}
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0