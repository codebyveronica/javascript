function contar() {
    // Minha resolução
    var inicio = document.getElementById('txti');
    inicio = Number(inicio.value);
    var fim = document.getElementById('txtf');
    fim = Number(fim.value);
    var passo = document.getElementById('txtp');
    passo = Number(passo.value);
    
    let res = document.getElementById('res');

    if(inicio.value == "" || fim.value == "") {
        res.innerHTML = 'Impossível contar';
    } else {
        if (passo == "" || passo == 0) {
            alert('Passo inválido! Considerando passo como 1');
            passo = 1;
        } 

        res.innerHTML = 'Contando: <br>';
        if(inicio > fim) {
            while (inicio >= fim)
            {
                res.innerHTML += ` ${inicio} \u{1F449}`;
                inicio -= passo;
            }
        } else {
            while (inicio <= fim) {
                res.innerHTML += ` ${inicio} \u{1F449}`;
                inicio += passo;
            }
        }
        res.innerHTML += '\u{1F3C1}';
    }

    /* Resolução do professor
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar';
        //window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1');
            p = 1;
        }

        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        
        res.innerHTML += '\u{1F3C1}';
    }
    */
}


