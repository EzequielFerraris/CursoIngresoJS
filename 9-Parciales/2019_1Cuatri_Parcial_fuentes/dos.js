function validarNumero(num) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${num}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente.`)
        };

        let checker = /[^0-9.]/;

        if(checker.test(datoI)) {
            continue;
        }

        datoI= parseFloat(datoI);

        if(datoI <= 0 || isNaN(datoI)) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition);
};

function validarStr(str, persona) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${str} de la ${persona} persona`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, ingrese solamente letras.`)
        };

        let checker = /[\W0-9_]/g;

        if(checker.test(datoI)) {
            continue;
        }

        if(typeof datoI != "string" || datoI.length < 1) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition)
};

function mostrar()
{
    let nombreValidado1 = validarStr("el nombre", "primera");
    let pesoValidado1 = validarNumero("el peso");
    let nombreValidado2 = validarStr("el nombre", "segunda");
    let pesoValidado2 = validarNumero("el peso");
    

    let sumaPesos = pesoValidado1 + pesoValidado2;
    let promedio = sumaPesos / 2;

    alert(`Ustedes se llaman ${nombreValidado1} y ${nombreValidado2}, pesan ${pesoValidado1} y ${pesoValidado2} kilos, que sumados son ${sumaPesos} y cuyo promedio de peso es ${promedio}`);
};
