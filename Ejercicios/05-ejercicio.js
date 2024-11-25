function likes (number) {

    //Se realiza comparacion de miles a millones
    // if (miles <= 1000) {
    //     return (miles);
    // } else if (miles >= 34000) {        
    //     return (miles / 1000) + 'K';
    // } else if (millones >= 10000000) {
    //     return (millones) + 'M';
    // }

    if (number <= 999) {
        return number;
    } else if (number <= 999999) {
        return Math.floor(number / 1000) + 'K';
    } else {
        return Math.floor(number / 1000000) + 'M';
    }
}
    // console.log(1000 / 10)
    // console.log(1000 / 1.5)
//     // console.log(1000 % 998)

//     return (number % 2) == 0

// }

// likes('1000')
console.log(likes('234')) // "983"
console.log(likes('3242')) // "1K"
console.log(likes('60000')) // "54K"

// console.log(likes('30')) // "120K"
// console.log(likes('29')) // "25M"

