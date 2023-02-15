// const nome = ['João Vitor', 'Matheus Prates', 'Marcos Alexandre']

const pessoa = {
    nome: 'João',
    sobrenome: 'Alves',
    idade: 20
}

//FOR COM OBJETOS
for (let chave in pessoa){
    console.log(chave, '-', pessoa[chave]);
}

// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

//  for (let valor of nome){
//      console.log(valor);
//  }

// nome.forEach(function (valor, indice, array){
//     console.log(valor, indice, array);
// });