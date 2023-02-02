const form = document.getElementById('form-atividade');
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(atividades.includes(inputNomeContato.value)){
        alert`O contato ${inputNomeContato.value} ja foi inserido.`;
    }else{

    atividades.push(inputNomeContato.value);
    notas.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>';

    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;

    linhas += linha;
}
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
