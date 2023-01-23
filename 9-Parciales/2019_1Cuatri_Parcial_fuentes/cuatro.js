function validarNumero(num, orden) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${orden} ${num}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente.`)
        };

        let checker = /[^0-9.-]/;

        if(checker.test(datoI)) {
            continue;
        }

        datoI= parseFloat(datoI);

        if(isNaN(datoI)) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition);
};

function mostrar(){

    let primerNumeroValidado = validarNumero("número", "el primer");
    let segundoNumeroValidado = validarNumero("número", "el segundo");
    let resultado;

    let flag = 0;
    if(primerNumeroValidado == segundoNumeroValidado) {
        resultado = (primerNumeroValidado.toString() + segundoNumeroValidado.toString());
    }
    else if (primerNumeroValidado > segundoNumeroValidado ) {
       resultado = (primerNumeroValidado) - (segundoNumeroValidado);
       if(resultado > 10) {
        flag++;
       };
    }
    else {
        resultado = primerNumeroValidado + (segundoNumeroValidado);
        
    };

    if(flag > 0) {
        alert(`La resta es ${resultado} y superó el 10`);
    }
    else {
        alert(`${resultado}`);
    };
    
};


/* 

Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".

*/