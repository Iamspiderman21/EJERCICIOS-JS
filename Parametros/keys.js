console.clear();
//-----------------------KEYS--------------------------------//

// const persona1 = {
//     nombre: 'Alan',
//     apellido: 'Aguilar',
//     edad: 21,
//     alergico: true,
// };

// Object.entries(persona1).forEach(par => {
//     const clave = par [1];
//     const valor = par [1];

//     if (typeof valor === 'string') 
//         persona1[clave] = valor.toUpperCase();
// });

// console.log(Object.entries(persona1));

//-----------------OBJECT.FROMENTRIES----------------------//

// const persona1 = [
//     ['name', 'Alan'],
//     ['apellido', 'Aguilar'],
//     ['edad', 21],
// ];

// console.log(Object.fromEntries(persona1));

//------------------------OBJECT.VALUES-------------------------------//

// const slarios = {
//     enero: 938,
//     febrero: 736,
//     marzo: 123,
// }

// console.log(Object.values(slarios).reduce((total, actual,) => 
//     {return total + actual;
//     }, 0)
// );

//------------------------OBJECT.VALUES-------------------------------//

const persona1 = {
    nombre: 'Alan',
    apellido: 'Aguilar',
    edad: 21,
    altura: 1.63,
    direccion: {
        Calle: 'Cto. Ahuhuete, #109',
    Ciudad: 'Guadalajara',
    Pais: 'Mexico',
    facturacion: {
        calle: 'La Rioja',
    },
    },
};
const personaClonada = {}

Object.assign(personaClonada, persona1);

persona1.direccion.Pais = 'Alemania';

console.log(persona1);
console.log(personaClonada);