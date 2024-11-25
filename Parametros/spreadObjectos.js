console.clear ();

const personaje = {
    nombre: 'Alan',
    apellido: 'Aguilar',
    alergias: {
        avena: true,
        apio: false,
    },
};
 
const direccion = {
    Calle: 'Cto. Ahuhuete, #109',
    Ciudad: 'Guadalajara',
    Pais: 'Mexico',
};


const persona = {
    ...personaje,
    ...direccion,
    edad:22,
};
personaje.alergias.apio = true;
console.log (personaje);
console.log (persona);