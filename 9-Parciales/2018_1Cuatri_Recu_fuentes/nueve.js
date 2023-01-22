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
            datoI = prompt("El dato ingresado es incorrecto. Solo debe utilizar letras. Inténtelo nuevamente:");
        };

        let checker = /[\W_0-9]/;
        if (checker.test(datoI)) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);
};

function validarDato(str1, min, max) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el dato ${str1} entre ${min} y ${max}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es incorrecto. Inténtelo nuevamente. Debe estar entre ${min} y ${max}:`);
        };

        let checker = /[^0-9.-]/g

        if (checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);
        if(datoI < min || datoI > max ||isNaN(datoI)) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);
};

function mostrar()
{
    let j=0;
    let conditionI = true;

    //VARIABLES

    let tempPares = 0;
    let pesoMasPesado;
    let nombreAnimalPesado;
    let tempMasPesado;
    let animalesMenosCero = 0;
    let pesoAcumulado = 0;
    let totalAnimales = 0;
    let promedioPeso = "No se ingresaron animales, por lo que no hay promedio de su peso";
    let pesoMaxBajoCero = "No se ingresaron animales que vivan bajo 0 grados.";
    let pesoMinBajoCero = "No se ingresaron animales que vivan bajo 0 grados.";

    do {
        let datoI;
        if(j==0) {
            alert(`Bienvenido! Aquí podrá ingresar un animal, su peso y la temperatura de su hábitat.`);
            j++;
        }
        else {
            datoI = prompt("¿Desea seguir ingresando datos? (SI/NO)");
            if(datoI != "SI" && datoI != "si" && datoI != "Si") {
                conditionI = false;
                break;
            };
        };


    // DATOS VALIDADOS

    let nombreValidado = validarStr("nombre del animal");
    let pesoValidado = validarDato("peso", 1, 1000);
    let tempHabitatVal = validarDato("temperatura del hábitat", -30, 30);

    //RECOPILANDO 
    //TEMPERATURAS PARES
    if(tempHabitatVal % 2 == 0) {
        tempPares++;
    };
    //PESO y ANIMALES
    totalAnimales++;
    pesoAcumulado += pesoValidado;

    if(j==1) {
        pesoMasPesado = pesoValidado;
        nombreAnimalPesado = nombreValidado;
        tempMasPesado = tempHabitatVal;
        j++;} 
    else {
        if(pesoValidado > pesoMasPesado) {
            pesoMasPesado = pesoValidado;
            nombreAnimalPesado = nombreValidado;
            tempMasPesado = tempHabitatVal;
        };
    };

    if(tempHabitatVal < 0) {
        animalesMenosCero++;
        if(typeof pesoMaxBajoCero != "number") {
            pesoMaxBajoCero = pesoValidado;
            pesoMinBajoCero = pesoValidado;
        }
        else {
            if(pesoMaxBajoCero < pesoValidado) {
                pesoMaxBajoCero = pesoValidado;
            };
            if(pesoMinBajoCero > pesoValidado) {
                pesoMinBajoCero = pesoValidado;
            };
        };
    };
    }
    while(conditionI);

    //CALCULO EL PROMEDIO

    if(totalAnimales != 0) {
        promedioPeso = (pesoAcumulado / totalAnimales).toFixed(2);
    };

    document.write(`a) Cantidad de temperaturas pares: ${tempPares}<br> 
    b) Nombre del animal más pesado: ${nombreAnimalPesado}<br> 
    c) Temperatura del hábitat del animal más pesado: ${tempMasPesado}<br> 
    d) Cantidad de animales que viven a menos de 0 grados: ${animalesMenosCero}<br> 
    e) Promedio del peso de todos los animales: ${promedioPeso}<br> 
    f) Peso máximo de los animales que viven  a menos de 0º: ${pesoMaxBajoCero}<br> 
    g) Peso mínimo de los animales que viven a menos de 0º: ${pesoMinBajoCero}<br> 
    `);
};

