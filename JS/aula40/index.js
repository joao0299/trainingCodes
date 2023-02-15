// Escreva uma função chamada ePaisagem que recebe dois
// argumentos, largura e altura de uma imagem (number).
// Retorna true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura) {
//     if (largura > altura) return true; return false;
// }

const ePaisagem = (largura, altura) => largura > altura; // Não é necessário nesse caso, pois já vai retornar  true ou false -> ? true : false;

console.log(ePaisagem(1920, 1080));