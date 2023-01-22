function validarDato(str1) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el ${str1}`);
            i++;
        }
        else {
            datoI = prompt("El dato ingresado es incorrecto. Inténtelo nuevamente:");
        };

        let checker = /[^0-9.]/g

        if (checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);
        if(datoI <= 0 || isNaN(datoI)) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);
    
}

function mostrar()
{
    let primerNumero = validarDato("primer número");
    let segundoNumero = validarDato("segundo número");
    let resultado;

    if(primerNumero == segundoNumero) {
        resultado= primerNumero.toString() + segundoNumero.toString();
        alert(`El resultado es: ${resultado}.`);
    }
    else if(primerNumero > segundoNumero) {
        resultado = primerNumero / segundoNumero;
        alert(`El resultado es: ${resultado}.`);
    }
    else {
        resultado = primerNumero + segundoNumero;
        if(resultado < 50) {
            alert(`El resultado es: ${resultado} y es menor a 50.`);
        }
        else {
            alert(`El resultado es: ${resultado}.`);
        };
    };
};


