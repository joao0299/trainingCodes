const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
}

//Atribuição via desestruturação

/*const { endereco: { numero: n = 315, rua },
    endereco }
    = pessoa;
//const nome = pessoa.nome;
console.log(rua, n, endereco);*/

const { nome, ...resto } = pessoa;
console.log(resto);