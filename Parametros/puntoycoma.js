//------------------PUNTOYCOMA-----------------
//----CUANDO UN ARCHIVO O LA SIGUIENTE LINEA COMIENSA POR }------

// console.clear();

// function logFunction(){
//     console.log('Funciona muy bien')
// }

// logFunction()


// console.clear();

// function logNoFunction(){
//     console.log('No funciona')
//     return;
// }

// logNoFunction()

const nombres = ['Feid', 'Alan', 'Spider'];

for (const nombre of nombres) {

    if (nombre === 'Alan') throw new Error('Alan no esta')

    console.log(nombre);
}