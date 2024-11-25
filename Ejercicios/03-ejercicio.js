function bmi (peso, altura) {
    let imc = (peso/ (altura * altura));

    if (imc < 18.5) {
        return "Bajo peso ";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc > 30){
        return "Obesidad";
    }
}
console.log (bmi ('65', '1.8'));
console.log (bmi ('72', '1.6')); 
console.log (bmi ('52', '1.75'));
console.log (bmi ('45', '1.8'));
console.log (bmi ('135','1.7'));


// ctrl + ñ - abre la terminal
// node felcha seleccionar archivo pra compilar
// ctrl + D - te de vuelve a terminal
