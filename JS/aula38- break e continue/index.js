const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) { for of

// for (let i in numeros) { for in
// let numero = numeros[i];

// for (let i = 0; i <= numeros.length; i++) { for classico
//     let numero = numeros[i];

let i = 0;
// while (i < numeros.length) { laço com while
do {
    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`);
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(`Numero ${numero} encontrado. Encerrando o processo...`);
        break;
    }

    console.log(numero);

    i++;
} while (i < numeros.length) // laço com do + while

// Continue -> Continua para a próxima iteração
// Break -> Sai do laço