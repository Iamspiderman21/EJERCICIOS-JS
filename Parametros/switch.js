console.clear ();

//-----------------------------SIN SWITCH---------------------------

const GAME_OPTIONS = ['PIEDRA', 'PAPEL', 'TIJERA'];

const GAME_RULES = {
    PIEDRA: {
        TIJERA: true,
        PAPEL: false,
    },
    PAPEL: {
        PIEDRA: true,
        TIJERA: false,
    },
    TIJERA: {
        PAPEL: true,
        PIEDRA: false,
    },
}
function game (player1, player2) {
    if (!GAME_OPTIONS.includes(player1) / !GAME_OPTIONS.includes(player2))
        throw new Error ('Opciones del juego no valida');

    if (player1 === player2) return 'Empate';

//-----------------------------CON SWITCH---------------------------
    
    // switch(player1){
    //     case 'PIEDRA':
    //         switch(player2) {
    //             case 'PAPEL':
    //             return 'Player 2 win!!';
    //         default: 
    //             return 'Player 1 win!!!';       
    //     }
    //     case 'PAPEL':
    //         switch(player2) {
    //             case 'TIJERA':
    //             return 'Player 2 win!!';
    //         default: 
    //             return 'Player 1 win!!!';       
    //     }
    //     case 'TIJERA':
    //         switch(player2) {
    //             case 'PIEDRA':
    //             return 'Player 2 win!!';
    //         default: 
    //             return 'Player 1 win!!!';       
    //     }
    // }

    if(GAME_RULES[player1][player2]) return 'Player1 win!!!';
    else return 'Player2 win!!!';
}

console.log(game('PIEDRA', 'TIJERA'));