function salvarInformacoesContato() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        var informacoesContato = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        var mensagensSalvas = JSON.parse(localStorage.getItem('mensagensSalvas')) || [];
        
        mensagensSalvas.push(informacoesContato);

        localStorage.setItem('mensagensSalvas', JSON.stringify(mensagensSalvas));

        document.getElementById('formularioContato').reset();

        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por favor, preencha todas as informações de contato.');
    }
}