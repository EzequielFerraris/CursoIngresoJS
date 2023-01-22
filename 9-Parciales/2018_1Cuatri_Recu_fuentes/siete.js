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

        let checker = /[^0-9.]/g

        if (checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);
        if(datoI < 0 || datoI > 10 ||isNaN(datoI)) {
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

        datoI = datoI.toUpperCase();
        if(datoI !="M" && datoI !="F") {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);

}

function mostrar()
{
    let sumaNotas=0;
    let promedio;
    let notaMasBaja;
    let sexoNotaMasBaja;
    let contadorVaronesA = 0;

    for(let i=0; i<5; i++) {
        
        let notaValidada = validarDato("nota");
        let sexoValidado = validarStr("sexo");
        //SUMO EL TOTAL DE NOTAS PARA CALCULAR LUEGO EL PROMEDIO
        sumaNotas += notaValidada;
        //SI RECIÉN EMPIEZO O SI LA NOTA ES MÁS BAJA QUE LA REGISTRADA, ACTUALIZO EL DATO
        if(i==0 || notaValidada < notaMasBaja) {
            notaMasBaja = notaValidada;
            sexoNotaMasBaja = sexoValidado;
        };
        //ACTUALIZO CONTADOR DE VARONES SI EL SEXO == M
        if (sexoValidado == "M" && notaValidada >= 6) {
            contadorVaronesA++;
        };

    };
    if(sexoNotaMasBaja == "M") {
        sexoNotaMasBaja = "Masculino";
    }
    else {
        sexoNotaMasBaja = "Femenino";
    };
    //CALCULO PROMEDIO
    promedio = (sumaNotas / 5).toFixed(2);
    
    alert(`El promedio de las notas de los 5 alumnos fue de ${promedio}. 
    La nota más baja fue un ${notaMasBaja} y fue obtenida por una persona de sexo ${sexoNotaMasBaja}.
    La cantidad de varones aprobados es de ${contadorVaronesA}.`);

}
