let validpasswords = ['2Fj(jjbFsu' , 'eoZiugBf&g9'];
//console.log(password);

function contrasenaValida (password){
    if (validpasswords.includes(password)){
        console.log('Es verdadero');
        return true;
    }
    console.log('Es falso');
    return false;
}

contrasenaValida ('2Fj(jjbFsu');


