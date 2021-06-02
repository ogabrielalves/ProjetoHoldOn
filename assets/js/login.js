function validarEmail() {
    var email = idEmail.value;
    var validarArroba = email.indexOf('@');
    var validarPonto = email.indexOf('.com');

    if (validarArroba > 0 && validarPonto > 0) {
        idEmail.style.border = '3px solid #04d361';
    }
    else if (email == '') {
        idEmail.style.border = 'none';
        valido = valido + 1;
    }
    else {
        idEmail.style.border = '3px solid #eb3e3e';
    }
}

function validarSenha() {
    var senha = idSenha.value;

    if (senha == senha) {
        idSenha.style.border = '3px solid #04d361';
    }
    else if (senha == '') {
        idSenha.style.border = 'none';
        valido = valido + 1;
    }
    else {
        idSenha.style.border = '3px solid #eb3e3e';
    }
}

function anonimo() {
    document.getElementById('idNome').value = `Anônimo`;
    document.getElementById('idNome').disabled = true;
}