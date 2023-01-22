function validarDato(str1) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el dato ${str1}`);
            i++;
        }
        else {
            datoI = prompt("El dato ingresado es incorrecto. Inténtelo nuevamente:");
        };

        let checker = /[^0-9.-]/g

        if (checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);
        if(datoI < -100 || datoI > 100 ||isNaN(datoI)) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);
}

function validarStr(str1) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el dato ${str1}`);
            i++;
        }
        else {
            datoI = prompt("El dato ingresado es incorrecto. Inténtelo nuevamente:");
        };

        let checker = /[\W_0-9]/g;
        if (checker.test(datoI)) {
            continue;
        };

        if(datoI.length != 1) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);

}

function mostrar()
{
//VARIABLES
    let contadorPares = 0;
    let contadorImpares = 0;
    let cantidadCeros = 0;
    let cantidadPositivos = 0;
    let sumaPositivos = 0;
    let sumaNegativos = 0;
    let numeroMaximo;
    let letraMaxima;
    let numeroMinimo;
    let letraMinimo;

//LOOP PRINCIPAL
    let j=0;
    let conditionI = true;
    do {
        let datoI;
        if(j==0) {
            alert(`
            Bienvenido! Aquí podrá registrar datos numéricos y letras para su posterior estadística. Los números deben ser entre -100 y 100, y las letras pueden ser una (1) por registro.`);
            j++;
        }
        else {
            datoI = prompt("¿Desea seguir ingresando datos? (SI/NO)");
            if(datoI != "SI" && datoI != "si" && datoI != "Si") {
                conditionI = false;
                break;
            };
        };
//DATOS VALIDADOS
        let letraValidada = validarStr("letra");
        let numeroValidado = validarDato("número");
        
//ACTUALIZAR VARIABLES
//pares e impares
        if(numeroValidado % 2 == 0) {
            contadorPares++;
        } 
        else {
            contadorImpares++;
        };
//ceros y posit /neg
        if(numeroValidado==0) {
            cantidadCeros++;
        }
        else if (numeroValidado > 0) {
            sumaPositivos += numeroValidado;
            cantidadPositivos++
        }
        else {
            sumaNegativos += numeroValidado;
        };
//nro max y min primera iteración

        if(j==1) {
            numeroMaximo = numeroValidado;
            letraMaxima = letraValidada;
            numeroMinimo = numeroValidado;
            letraMinimo = letraValidada;
            j++;
        }
        else{ //segunda en adelante
            if(numeroMaximo < numeroValidado) {
                numeroMaximo = numeroValidado;
                letraMaxima = letraValidada;
            };

            if(numeroMinimo > numeroValidado) {
                numeroMinimo = numeroValidado;
                letraMinimo = letraValidada;
            };
        }

    }
    while(conditionI);
//PROMEDIO POSITIVOS
    let promedioPos;
    if(cantidadPositivos == 0)  {
        promedioPos = "No hubo números positivos"
    }
    else {
        promedioPos = (sumaPositivos / cantidadPositivos).toFixed(2);
    };

    document.write(`a) Cantidad de números pares: ${contadorPares}<br>
    b) Cantidad de números impares: ${contadorImpares}<br>
    c) Cantidad de ceros: ${cantidadCeros}<br>
    d) Promedio de todos los números positivos ingresados: ${promedioPos}<br>
    e) Suma de todos los números negativos: ${sumaNegativos}<br>
    f) El número máximo: ${numeroMaximo}<br>
    g) Letra del número máximo: ${letraMaxima}<br>
    h) El número mínimo: ${numeroMinimo}<br>
    i) Letra del número mínimo: ${letraMinimo}<br>`
    );

};
