function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}


const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);

setTimeout(() => {
    console.log('Hello World');

}, 8000);