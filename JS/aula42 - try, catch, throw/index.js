// try {
//     console.log(naoExiste);
// } catch (erro) {
//     console.log(`Variável não definida`);
//     console.log(erro)
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}

try {
    
    console.log(soma('a', 3));
} catch (err) {
    console.log('Alguma coisa mais amigável');
}