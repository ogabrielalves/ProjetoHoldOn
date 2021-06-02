function enviar() {
    let nome = idNome.value;
    let email = idEmail.value;
    let telefone = idTelefone.value;
    let mensagem = idMensagem.value

    if (nome.length < 2) {
        alert('Insira o nome.')
    }
    if (email.length < 10) {
        alert('Insira um email válido.')
    }
    if (telefone.length < 11) {
        alert('Insira um número de telefone correto.')
    }
    if (mensagem == "") {
        alert('Insira uma mensagem.')
    }
}