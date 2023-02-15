// Escreva uma função que recebe 2 números e verifica o maior deles

// function max(x, y) {
//     // if (x > y) return x; return y;

//     return x > y ? x : y;
// }

// const max2 = (x, y) => { ARROW FUNCTION
//     return x > y ? x : y;
// }

const max2 = (x, y) => x > y ? x : y; // Caso a arrow function só possui uma linha, pode deixar dessa forma. Não tem necessidade de usar return, pois a função por padrão já deve retornar algo

console.log(max2(10, 7));