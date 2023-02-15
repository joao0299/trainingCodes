const nome = 'João Vitor';
const sobrenome = 'Alves';
let idade = 22;
const peso = 75;
const altura = 1.74;
let imc;
imc = peso / (altura*altura);
let anoNascimento;
anoNascimento = 2022 - idade;

console.log(nome, sobrenome,  `tem`, idade, `anos, pesa`, peso, `kg`) ;
console.log(`tem`, altura, `de altura e seu IMC é de`, imc);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)