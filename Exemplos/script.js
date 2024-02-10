function adicionarNome() {
    var nome = document.getElementById('nome').value;

    if (nome.trim() === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    var tbody = document.getElementById('tbody');
    var newRow = tbody.insertRow();

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = nome;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = '<button onclick="editarNome(this)">Editar</button>' +
                      '<button onclick="excluirNome(this)">Excluir</button>';
}

window.onload = function() {
    for (let i = 1; i <= 10; i++) {
        let nome = `Nome ${i}`;
        adicionarRegistro(nome);
    }
};

function adicionarRegistro(nome) {
    var tbody = document.getElementById('tbody');
    var newRow = tbody.insertRow();

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = nome;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = '<button onclick="editarNome(this)">Editar</button>' +
                      '<button onclick="excluirNome(this)">Excluir</button>';
}

function editarNome(button) {
    var row = button.parentNode.parentNode;
    var nome = row.cells[0].innerHTML;
    var novoNome = prompt('Digite o novo nome', nome);

    if (novoNome !== null) {
        row.cells[0].innerHTML = novoNome;
    }
}

function excluirNome(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
