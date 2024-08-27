function contar() {
    var inicio = window.document.getElementById('iniciotxt');
    inicio = Number(inicio.value);
    var fim = window.document.getElementById('fimtxt');
    fim = Number(fim.value);
    var passo = window.document.getElementById('passotxt');
    passo = Number(passo.value);
    
    var res = window.document.getElementById('res');

    res.innerHTML = '<p>Contando:</p>';
    while (inicio <= fim) {
        res.innerHTML += `${inicio} `;
        if (inicio == fim) {
            res.innerHTML += String.fromCodePoint(0x1F3C1);
        }
        else {
            res.innerHTML += String.fromCodePoint(0x1F449, 0x0020);
        }

        inicio += passo;
    }
}


