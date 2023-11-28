function getMensagensSalvas() {
    return JSON.parse(localStorage.getItem('mensagensSalvas')) || [];
}

var mensagensSalvas = getMensagensSalvas();

if (mensagensSalvas.length > 0) {
    document.write('<table>');
    document.write('<tr><th>Nome</th><th>Email</th><th>Mensagem</th></tr>');
    
    for (var i = 0; i < mensagensSalvas.length; i++) {
        var mensagem = mensagensSalvas[i];
        document.write('<tr><td>' + mensagem.nome + '</td><td>' + mensagem.email + '</td><td>' + mensagem.mensagem + '</td></tr>');
    }

    document.write('</table>');
} else {
    document.write('<p>Nenhuma mensagem disponível.</p>');
}