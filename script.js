document.getElementById('rankedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    
    const resultado = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}.`;
    document.getElementById('resultado').innerText = resultado;
});

function calcularSaldo(vitoria, derrota) {
    return vitoria - derrota;
}

function determinarNivel(vitoria) {
    if (vitoria < 10) {
        return 'Ferro';
    } else if (vitoria >= 11 && vitoria <= 20) {
        return 'Bronze';
    } else if (vitoria >= 21 && vitoria <= 50) {
        return 'Prata';
    } else if (vitoria >= 51 && vitoria <= 80) {
        return 'Ouro';
    } else if (vitoria >= 81 && vitoria <= 90) {
        return 'Diamante';
    } else if (vitoria >= 91 && vitoria <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}
