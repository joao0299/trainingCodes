/*
Escreva uma função que recebe um numero e retorne o seguinte:
Número é divísivel por 3 - Fizz
Número é divísivel por 5 - Buzz
Número é divísivel por 3 e 5 - FizzBuzz
Número NÃO é divísivel por 3 e 5 = retornar o próprio número
Checar se o número é realmente um número
Use a função ocom números de 0 a 100
*/

// const recebeNumero = (num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log('FizzBuzz')
//     }

//     else if (num % 3 === 0) {
//         console.log('Fizz')
//     }
//     else if (num % 5 === 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(num)
//     }

// }
// console.log(recebeNumero(2));

//################### - Feito por mim acima ################################

function fizzBuzz(num) {
    if (typeof num !== 'number') return NaN;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}