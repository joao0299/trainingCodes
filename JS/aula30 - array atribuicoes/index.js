///*operador rest, spread ...*/

//const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
//const [um, , tres, , cinco, , sete] = numeros


//     0            1          2
//   0  1  2    0  1  2    0  1  2
const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2])

/*const [, [, , seis]] = numeros;
console.log(seis)*/

//console.log(numeros[1][2])

