//Operadores Ternários = Diminuir tamanho do código
// condição ? 'Valor para verdadeiro' : 'Valor para falso'; 

// ? :

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário comum';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, '- Cor: ',corPadrao)

/* 
console.log('Usuário VIP.');
} else {
    console.log('Usuário comum.');
}
 */



