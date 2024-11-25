console.clear();

let unidades = 0;
let decenas = 0;

incrementaDecenas: while(true){
    console.log(`Bucle decenas: ${decenas}${unidades}`)

    incrementaUnidades: while(true){
        unidades +=1

        if(decenas === 2) break incrementaDecenas;

        if(unidades === 10){
           unidades = 0;
           break incrementaUnidades;
        }

        console.log(`Bucle unidades: ${decenas}${unidades}`)
    }

    decenas +=1;
    // if(decenas === 3) {
    //     console.log(`Bucle decenas: ${decenas}${unidades}`)
    //     break;
    // }
}