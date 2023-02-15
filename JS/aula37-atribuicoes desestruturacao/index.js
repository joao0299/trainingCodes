const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. America',
        numero: 320,
    }
}
//para jogar uma atributo do objeto na variável (atribuição normal):

// const nome = pessoa.nome;
// console.log(nome)

//atribuicao via desestruturação
// const {endereco: {rua: r, numero}, endereco} = pessoa;
// console.log(r,  numero, endereco);


//...resto é o mesmo que todo o objeto, exceto o nome. O nome fica fora do array de objetos
const { nome, ...resto } = pessoa;
console.log(resto, nome);