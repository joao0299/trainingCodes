const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const ulTarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;

}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

function criaBotaoApagar(li){
    li.innerHTML += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText =  'Apagar';
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    ulTarefas.appendChild(li);
};

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});