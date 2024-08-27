function multiplicar() {

    var multiplicando = window.document.getElementById('numtxt');
    multiplicando = Number(multiplicando.value);
    var multiplicador = 0;
    var tabuada = window.document.getElementById('tabuada');

    for (i = multiplicador; i <= 10; i++) {
        var multiplicação = multiplicando * multiplicador;
        var option = document.createElement('option');
        option.innerHTML = `${multiplicando} x ${multiplicador} = ${multiplicação}`;
        tabuada.add(option);
        multiplicador++;
    }

    /*while (multiplicador <= 10) {
        var multiplicação = multiplicando * multiplicador;
        var option = document.createElement('option');
        option.innerHTML = `${multiplicando} x ${multiplicador} = ${multiplicação}`;
        tabuada.add(option);
        multiplicador++;
    }*/
}