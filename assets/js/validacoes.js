// Validar o nome
function validarNome() {
    if (idNome.value.length >= 3) {
        idNome.style.border = '2px solid #04d361';
    }
    else if (idNome.value == "") {
        idNome.style.border = 'none';
    }
    else {
        idNome.style.border = '2px solid #eb3e3e';
    }
}

// Validar sobrenome
function validarSobrenome() {
    if (idSobrenome.value.length >= 5) {
        idSobrenome.style.border = '2px solid #04d361';
    }
    else if (idSobrenome.value == "") {
        idSobrenome.style.border = 'none';
    }
    else {
        idSobrenome.style.border = '2px solid #eb3e3e';
    }
}

// Validar CPF
function validarCPF() {
    if (idCPF.value.length == 11) {
        idCPF.style.border = '2px solid #04d361';
    }
    else if (idCPF.value == "") {
        idCPF.style.border = 'none';
    }
    else {
        idCPF.style.border = '2px solid #eb3e3e';
    }
}

// Validar Data de Nascimento
function validarData() {
    if (Number(idData.value[3]) >= "4" && Number(idData.value[2] < "2")) {
        alert('Você é menor de idade, deve realizar outro cadastro.');
        idData.style.border = '2px solid #eb3e3e';
    }
    else {
        idData.style.border = '2px solid #04d361';
    }
}

// Validar Email

function validarEmail() {
    var email = idEmail.value;
    var validarArroba = email.indexOf('@');
    var validarPonto = email.indexOf('.com');

    if (validarArroba > 0 && validarPonto > 0) {
        idEmail.style.border = '2px solid #04d361';
    }
    else if (email == '') {
        idEmail.style.border = '2px solid #e5e5e575';
    }
    else {
        idEmail.style.border = '2px solid #eb3e3e';
    }
}

// Validar Senha
function validarSenha() {
    var senha = idSenha.value;

    if (senha == senha) {
        idSenha.style.border = '2px solid #04d361';
    }
    else {
        idSenha.style.border = '2px solid #eb3e3e';
    }
}

// Validar telefone
function validarTelefone() {
    var telefone = idTelefone.value;

    if (telefone.length == 11) {
        idTelefone.style.border = '2px solid #04d361';
    }
    else {
        idTelefone.style.border = '2px solid #eb3e3e';
    }
}