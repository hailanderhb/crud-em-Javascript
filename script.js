var linhaSelecionada = null;

function enviarOn(){ //Função para o evento click no form (enviar)
    var dadosFormulario = lerDados();
    if(linhaSelecionada == null){
        inserirNovosDados(dadosFormulario);
    }else{
        atualizarDados(dadosFormulario);
    }
    
    resetarForm();
}

function lerDados(){ //função para o valor nos dados do formulário ser pego nos respectivos itens
    var dadosFormulario = {};
    dadosFormulario["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    dadosFormulario["profissao"] = document.getElementById("profissao").value;
    dadosFormulario["salario"] = document.getElementById("salario").value;
    dadosFormulario["cidade"] = document.getElementById("cidade").value;
    return dadosFormulario;
}

function inserirNovosDados(data){ //função para incrementar a linha o valor descrito no form das respectivas colunas.
    var table = document.getElementById("listaEmpregados").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);
    cell1 = novaLinha.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = novaLinha.insertCell(1);
    cell2.innerHTML = data.profissao;
    cell3 = novaLinha.insertCell(2);
    cell3.innerHTML = data.salario;
    cell4 = novaLinha.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = novaLinha.insertCell(4);
    cell4.innerHTML = `<a onclick= "editar(this)">Editar</a>/
                        <a onclick= "deletar(this)">Deletar</a>`;

}

function resetarForm(){//Limpar formulario após enviar
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("profissao").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    linhaSelecionada = null;
}

function editar(td){//Editar o dado já inserido -> colocar de volta no form
    linhaSelecionada = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById("profissao").value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById("salario").value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById("cidade").value = linhaSelecionada.cells[3].innerHTML;

}

function atualizarDados(dadosFormulario){//Após atualiado ele retorna para a propriedade em questão.
    linhaSelecionada.cells[0].innerHTML = dadosFormulario.nomeCompleto;
    linhaSelecionada.cells[1].innerHTML = dadosFormulario.profissao;
    linhaSelecionada.cells[2].innerHTML = dadosFormulario.salario;
    linhaSelecionada.cells[3].innerHTML = dadosFormulario.cidade;

}

function deletar(td){//alert para confirmar a exclusão dos dados
    if(confirm("Tem certeza que quer deletar esses dados?")){
        linha = td.parentElement.parentElement;
        document.getElementById("listaEmpregados").deleteRow(linha.rowIndex);
        resetarForm();
    }

}