function validarNumero(num, min, max) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese ${num}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente. Ingrese ${num}`)
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
            datoI = prompt(`Por favor, ingrese ${str}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, ingrese ${str} en letras`)
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

function mostrar(){

    let cantidadTempPares = 0;
    let paisesMasDe40g = 0;
    let cantidadPaises = 0;
    let sumaHabitantes = 0;

    let menorCantH = "No se ingresaron datos";
    let paisMenosH = "No se ingresaron datos";
    let menorTemp = "No se ingresaron datos";
    let paisMenorTemp = "No se ingresaron datos";
    
    let promedioHPaises = "No se ingresaron datos como para realizar el promedio";

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

    let nombrePaisValidado = validarStr("el nombre del país");
    let habitantesValidado = validarNumero("la cantidad de habitantes (en millones. Rango: 1 a 7000)", 1, 7000);
    let tempMinValidada = validarNumero("temperatura mínima del país (en grados centígrados. Rango: -50º a 50º)", -50, 50);
    
    if(j==1) {
        menorCantH = habitantesValidado;
        paisMenosH = nombrePaisValidado;
        menorTemp = tempMinValidada;
        paisMenorTemp = nombrePaisValidado;
        j++;
    } 
    else {
        if(menorCantH > habitantesValidado){
            menorCantH = habitantesValidado;
            paisMenosH = nombrePaisValidado;
        };
        if(menorTemp > tempMinValidada) {
            menorTemp = tempMinValidada;
            paisMenorTemp = nombrePaisValidado;
        };
    };

    cantidadPaises++;
    sumaHabitantes+= habitantesValidado;

    if(tempMinValidada % 2 == 0) {
        cantidadTempPares++;
    };
    
    if(tempMinValidada > 40) {
        paisesMasDe40g++;
    };

    }
    while(condition);

if(cantidadPaises > 0) {
    promedioHPaises = (sumaHabitantes / cantidadPaises).toFixed(2);
};

document.write(`a) Cantidad de temperaturas pares: ${cantidadTempPares}<br>
b) Pais con menos habitantes: ${paisMenosH}<br>
c) Cantidad de paises que superan los 40 grados: ${paisesMasDe40g}<br>
d) Promedio de habitantes entre los paises ingresados: ${promedioHPaises}<br>
e) Temperatura mínima: ${menorTemp}<br>
f) País con la temperatura mínima: ${paisMenorTemp}<br>`);
};

