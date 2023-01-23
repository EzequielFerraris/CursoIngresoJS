
function validarNumero(num, min, max) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese ${num}.`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente.`)
        };

        let checker = /[^0-9.-]/;

        if(checker.test(datoI)) {
            continue;
        };

        datoI= parseFloat(datoI);

        if(datoI < min || datoI > max || isNaN(datoI)) {
            continue;
        };
        condition = false;
        return datoI;
    }
    while(condition);
};

function validarStr(str) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${str}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, ingrese solamente letras.`)
        };

        let checker = /[\W0-9_]/g;

        if(checker.test(datoI)) {
            continue;
        }

        if(datoI.length != 1) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition)
};



function mostrar(){

    let cantidadPares = 0;
    let cantidadImpares = 0;
    let cantidadCeros = 0;
    let cantidadPositivos = 0;
    let sumaPositivos = 0;
    let sumaNegativos = 0;
    let promedioPositivos = "No se ingresaron números positivos."
    let valorMaximo = "No se ingresó ningún valor";
    let letraValorMaximo = "No se ingresó ningún valor";
    let valorMin = "No se ingresó ningún valor";
    let letraValorMin = "No se ingresó ningún valor";


    let condition = true;
    let j = 0;
    do {
        let pregunta;
        if(j==0) {
            alert("Bienvenido! Aquí podrá ingresar números asociados con letras y luego ver su estadística.")
            j++;
        }
        else {
            pregunta = prompt("¿Desea seguir ingresando datos? (SI/NO)");
            if(pregunta != "SI" && pregunta != "Si" && pregunta != "si") {
                condition = false;
                break;
            };
        };

        let letraValidada = validarStr("la letra");
        let numeroValidado = validarNumero("un número (entre -100 y 100)", -100, 100);
 

        if(j==1) {
            valorMaximo = numeroValidado;
            letraValorMaximo = letraValidada;
            valorMin = numeroValidado;
            letraValorMin = letraValidada;
            j++;
        } 
        else {
            if(valorMaximo < numeroValidado){
                valorMaximo = numeroValidado;
                letraValorMaximo = letraValidada;
            };
            if(valorMin > numeroValidado) {
                valorMin = numeroValidado;
                letraValorMin = letraValidada;
            };
        };

        if(numeroValidado == 0) {
            cantidadCeros++;
        }
        else if (numeroValidado > 0){
            cantidadPositivos++;
            sumaPositivos += numeroValidado;
        }
        else {
            sumaNegativos += numeroValidado;
        };

        if(numeroValidado % 2 == 0) {
            cantidadPares++;
        }
        else {
            cantidadImpares++;
        }

    }
    while(condition);

    if(cantidadPositivos > 0) {
        promedioPositivos = (sumaPositivos / cantidadPositivos).toFixed(2);
    };
    if(sumaNegativos == 0) {
        sumaNegativos = "No se ingresaron números negativos";
    };

    document.write(`a) Cantidad de números pares: ${cantidadPares}<br>
    b) Cantidad de números impares: ${cantidadImpares}<br>
    c) Cantidad de ceros: ${cantidadCeros}<br>
    d) Promedio de todos los números positivos ingresados: ${promedioPositivos}<br>
    e) Suma de todos los números negativos: ${sumaNegativos}<br>
    f) Número más alto: ${valorMaximo}<br>
    g) Letra del número más alto: ${letraValorMaximo}<br>
    h) Número más bajo: ${valorMin}<br>
    i) Letra del número más bajo: ${letraValorMin}<br>`);
};
