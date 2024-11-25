console.clear();

const personaObj = {
    name: 'Alan',
    surname: 'Aguilar',
    age: 21,
    mail: 'alanagugo@gmail.com',
    favoriteColor: 'blue',
};

personaObj[Symbol.iterator] = function*() {
    const values = Object.values(personaObj);
    for (const value of values ) {
    yield value;
    }
};

const personaArr = ['Alan', 'Aguilar', 21, 'alanagugo@gmail.com', 'blue',];


for (const propiedad of personaObj) {
    console.log(propiedad);
}